FROM node:18.14.0

RUN mkdir -p /app

RUN npm install -g @angular/cli --save
RUN npm install -g http-server --save

WORKDIR /app

COPY package.json /app

RUN npm install --save

COPY . /app
