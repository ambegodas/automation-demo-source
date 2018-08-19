FROM node:4.6
WORKDIR /app
ADD index.js /app
EXPOSE 3000
RUN npm install express
CMD node index.js

