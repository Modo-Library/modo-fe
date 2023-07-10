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
RUN npm install

### Build Image (build on dependency)
FROM dependency as build

WORKDIR /app
COPY . /app
RUN npm run build

#### Server Image
FROM nginx:alpine as server
ENV SERVICE main
ENV URL app/main
ENV PORT 5173
ENV HOST 0.0.0.0

COPY nginx.conf /etc/nginx/conf.d/modo.template
COPY --from=build /app/.next /home/ubuntu/production/$URL

WORKDIR /home/ubuntu/production/$URL
RUN rm -rf cache
RUN npm run preview

EXPOSE $PORT

## Inject Environment Variables
CMD sh -c "envsubst '\$PORT \$URL \$SERVICE' < /etc/nginx/conf.d/modo.template > /etc/nginx/conf.d/modo.conf && nginx -g 'daemon off;'"