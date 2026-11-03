#
#  Path: Dockerfile
#  Description: Multi-stage Docker build for a React/Vite application using Nginx.
#  Author: Richard Anderson.
#  Last Updated: 3-Nov-2026.
#  Version: 1.2.3
#  Note: Uses dynamic Node 22 and secure pinned Nginx unprivileged Alpine base images.
#

# ==========================================
# Stage 1: Build Stage
# ==========================================
# Uses Node 22 Alpine to build the static assets
FROM node:22-alpine AS build
WORKDIR /app

# Install dependencies first to optimize Docker's layer caching
COPY package*.json ./
RUN npm ci && npm cache clean --force

# Copy the rest of the source code and trigger the production build
COPY . .
RUN npm run build


# ==========================================
# Stage 2: Production Stage
# ==========================================
# Uses the standard rolling stable alpine unprivileged image for automatic weekly security patching
FROM nginxinc/nginx-unprivileged:alpine

# Copy the compiled static assets from the build stage into Nginx's public web directory
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom Nginx routing and server configuration over the default template
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Document and expose port 8080 (Unprivileged system ports must be > 1024)
EXPOSE 8080

# Start Nginx in the foreground so container lifecycle management works properly
CMD ["nginx", "-g", "daemon off;"]
