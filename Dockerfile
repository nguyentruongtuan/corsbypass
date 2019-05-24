FROM node:10.15
WORKDIR /app
COPY . /app
RUN npm ci
CMD node index.js
EXPOSE 5000

