FROM node:18-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json ./
RUN npm install

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

ARG PROJECT
ARG EMAIL
ARG GCS_PRIVATE_KEY

ENV PROJECT=$PROJECT
ENV EMAIL=$EMAIL
ENV GCS_PRIVATE_KEY=$GCS_PRIVATE_KEY

EXPOSE 80

ENV PORT 80

ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]