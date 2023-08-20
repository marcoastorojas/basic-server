FROM node:18

WORKDIR /app

COPY package*.json /app
COPY ./dist /app/dist

RUN npm install

EXPOSE 3000

CMD ["npm","start"]