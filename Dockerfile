# ---- build stage ----
FROM node:24-slim AS build
WORKDIR /app

RUN npm install -g pnpm@10

# install deps first for layer caching
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# build static site -> build/
# BASE_PATH empty so the site is served from root (nginx), not a subpath
ENV BASE_PATH=""
COPY . .
RUN pnpm run build

# ---- runtime stage ----
FROM nginx:alpine AS runtime
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
