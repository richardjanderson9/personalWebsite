# --- Build Stage ---
FROM node:alpine AS build
WORKDIR /app

# Install dependencies first for better caching
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy source and build (Vite outputs to 'build/' based on your logs)
COPY . .
RUN npm run build

# --- Production Stage ---
# Uses official unprivileged image (runs as non-root 'nginx' user automatically)
FROM nginxinc/nginx-unprivileged:alpine

# Copy the build output
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Unprivileged ports must be > 1024
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]