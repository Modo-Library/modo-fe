#### Environment variable settings
ARG CLIENT_DOMAIN
ARG SERVER_DOMAIN
ARG CLIENT_IP
ARG SERVER_IP

#### Dependency Image
FROM node:16-alpine as dependency

# 호환성 고려
RUN apk add --no-cache libc6-compat

WORKDIR /app
COPY package.json /app/
COPY packages/components /app/packages/components
COPY packages/tsconfig /app/packages/tsconfig
COPY packages/config /app/packages/config
COPY packages/styles /app/packages/styles
COPY packages/assets /app/packages/assets
COPY packages/utils /app/packages/utils
RUN npm install

### Build Image (build on dependency)
FROM dependency as build

WORKDIR /app
COPY . /app
RUN npm run build
RUN rm -rf ./.next/cache

#### Server Image
FROM node:16-alpine as server
WORKDIR /app
ENV NODE_ENV=production
ENV PORT 5173

# 권한 부여 (next.js / node.js)
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# build 파일에 쓰기/읽기 권한 역할 적용
COPY --from=build /app/public ./public
COPY --from=build --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build --chown=nextjs:nodejs /app/.next/static ./.next/static

# User를 입력하여 컨테이너에 권한 부여
USER nextjs

EXPOSE $POST

CMD ["node", "server.js"]