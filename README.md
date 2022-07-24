## CI-CD Express App

#### Development setup
- Github registry
```
docker login ghcr.io --username patrick204nqh

docker tag patrick204nqh/ci-express-app:latest ghcr.io/patrick204nqh/ci-express-app:0.0.1
docker push ghcr.io/patrick204nqh/ci-express-app:0.0.1
```
- Dockerize project
```
docker-compose up -d
```

#### Deployment notes
- Heroky setup
```
# Heroku cli
curl https://cli-assets.heroku.com/install.sh | sh

# Set the stack of app
heroku stack:set container --app ci-express-ap
```
