FROM node:10-alpine 
RUN mkdir -p /src/app/socket 
WORKDIR /src/app/socket
COPY . /src/app/socket 
RUN npm install 
EXPOSE "${APP_PORT}" 
CMD [ "node", "index.js" ]
