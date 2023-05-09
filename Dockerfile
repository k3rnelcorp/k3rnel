FROM node:alpine

WORKDIR /app
ENV NODE_OPTIONS --openssl-legacy-provider

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080
ENTRYPOINT npm run serve
