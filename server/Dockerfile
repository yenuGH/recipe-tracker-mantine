FROM node

WORKDIR /usr/src/recipe-tracker

COPY package*.json ./ 

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]