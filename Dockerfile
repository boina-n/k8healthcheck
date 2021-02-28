FROM node:12.0-slim
COPY . .
run npm install

CMD [ "node", "index.js" ]