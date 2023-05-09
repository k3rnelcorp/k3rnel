FROM node:20
RUN apt update && apt full-upgrade -y --no-install-recommends git npm
RUN git clone https://github.com/k3rnelcorp/k3rnel-web-application-spa /usr/app/k3rnel-web-application-spa/
WORKDIR /usr/app/k3rnel-web-application-spa/
ENV NODE_OPTIONS --openssl-legacy-provider
RUN npm install
EXPOSE 8080
ENTRYPOINT npm run serve
