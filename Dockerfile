react app -> node
container -> linus -> alpine

node modules -> package.json

copy all files

start the app (command) -> npm install

ports? -> expose 3000

FROM node:18-alpine3.15

WORKDIR /app

COPY package.json ./

RUN npm install


COPY . .

EXPOSE 3000

CMD ["npm", "start"]
