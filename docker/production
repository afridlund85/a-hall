FROM node:10.2

WORKDIR /home/node/app

COPY . .

RUN npm i \
  && npm run build:server \
  && npm run build:client

USER node

EXPOSE 3000

CMD ["node", "dist/server.js"]
