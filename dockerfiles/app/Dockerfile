FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3006

CMD ["npm", "start"]