# ============================================================
# ITfix — Production Dockerfile (multi-stage, non-root)
# ============================================================

# ---- Stage 1: Install dependencies ----
FROM node:20-alpine AS deps
WORKDIR /app

# Install libc6-compat for Alpine compatibility with some native modules
RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN \
  if [ -f package-lock.json ]; then \
    npm ci; \
  else \
    npm install; \
  fi

# ---- Stage 2: Build the application ----
FROM node:20-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build-time env — must be present or next build can fail
ENV NODE_ENV=production
ENV NEXT_PUBLIC_SITE_URL=https://itfix.systems

RUN npm run build

# ---- Stage 3: Production server ----
FROM node:20-alpine AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy built artifacts from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Standalone output mode: copy only the standalone server bundle
# (requires next.config standalone output — see note below)
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set environment
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

EXPOSE 3000

# Healthcheck — hits the root endpoint every 30s
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/ || exit 1

USER nextjs

CMD ["node", "server.js"]
