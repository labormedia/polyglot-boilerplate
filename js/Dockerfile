FROM node:current-alpine
COPY ./package.json /app/
WORKDIR /app
RUN npm i
COPY ./server.js .
EXPOSE 7000
CMD node server.js