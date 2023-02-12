FROM node:18.14.0

RUN mkdir /usr/src/app

WORKDIR /usr/src/app

RUN rm -rf node_modules && npm install -g @angular/cli

COPY . .
