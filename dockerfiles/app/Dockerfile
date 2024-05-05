FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install express mysql cors crypto-js

COPY ./src ./src

CMD ["npm", "start"]