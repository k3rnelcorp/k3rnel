FROM node:current-alpine as builder

WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as main

COPY --from=builder /app/dist /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
