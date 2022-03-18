FROM node:12.22.10-buster

WORKDIR /var/www

COPY package.json .
COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 3000
CMD [ "yarn", "start" ]
