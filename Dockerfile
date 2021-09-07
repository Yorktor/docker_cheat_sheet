FROM node:14.17.5-alpine3.14
ADD . /app
WORKDIR "/app"
RUN npm install
CMD ["./node_modules/nodemon/bin/nodemon.js", "index.js"]

