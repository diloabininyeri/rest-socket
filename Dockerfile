FROM node:10-alpine 
RUN mkdir -p /src/app/socket 
WORKDIR /src/app/socket
COPY . /src/app/socket 
RUN npm install 
EXPOSE 3000 
CMD [ "node", "index.js" ]
