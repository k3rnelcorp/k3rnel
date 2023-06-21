# k3rnel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Docker

<details>
<summary>docker-compose</summary>

```
docker-compose -f docker-compose.yml -p k3rnel up -d
```
</details>

<details>
<summary>Dockerfile</summary>

```
# build
docker build -t k3rnel .

# run
docker run -p 8080:80 k3rnel
```
</details>

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
