FROM node:16.14.2

WORKDIR /var/www/app

COPY package.json yarn.lock ./

RUN yarn --pure-lockfile

COPY . .

ENTRYPOINT ["yarn", "start"]
