# Dockerfile

# Install dependencies only when needed
FROM node:14.18.1-alpine AS deps

# RUN apk add libc6-compat
WORKDIR /app
COPY . .

RUN ls -al

RUN yarn install --production

# Rebuild the source code only when needed
FROM node:14.18.1-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules


RUN yarn build


# Production image, copy all the files and run next
FROM node:14.18.1-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/src/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

USER nextjs

EXPOSE 3000

ENV NEXT_TELEMETRY_DISABLED 1

CMD ["yarn", "start"]

# # Name the node stage "builder"
# FROM node:14.17.6 AS builder
# # Set working directory
# WORKDIR /app
# # Copy all files from current directory to working dir in image
# COPY . .

# # install node modules and build assets
# RUN yarn && yarn build

# # nginx state for serving content
# FROM nginx:alpine
# # Set working directory to nginx asset directory
# WORKDIR /usr/share/nginx/html
# # Remove default nginx static assets
# RUN rm -rf ./*
# # Copy static assets from builder stage
# COPY --from=builder /app/build .
# COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
# # Containers run nginx with global directives and daemon off
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
