#### Environment variable settings
ARG CLIENT_DOMAIN
ARG SERVER_DOMAIN
ARG CLIENT_IP
ARG SERVER_IP

#### Dependency Image
FROM node:16-alpine as dependency

WORKDIR /app
COPY package.json /app/
COPY packages/components /app/packages/components
COPY packages/tsconfig /app/packages/tsconfig
COPY packages/config /app/packages/config
COPY packages/styles /app/packages/styles
COPY packages/assets /app/packages/assets
RUN npm install --silent

### Build Image (build on dependency)
FROM dependency as build-host

WORKDIR /app
COPY . /app
RUN npm run build

#### Server Image
FROM nginx:alpine as server
COPY nginx.conf /etc/nginx/conf.d/modo.template
COPY --from=build-host /app/dist /home/ubuntu/production/host

ENV PORT 5173
ENV HOST 0.0.0.0
EXPOSE 5173

## Inject Environment Variables
CMD sh -c "envsubst '\$PORT' < /etc/nginx/sites-available/modo.template > /etc/nginx/conf.d/modo.conf && systemctl restart nginx"

## nginx foreground 실행 (로그 터미널 확인)
ENTRYPOINT ["nginx", "-g", "daemon off;"]