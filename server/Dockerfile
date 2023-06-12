FROM node:18 as base
WORKDIR /app/
COPY package*.json ./
RUN npm install
COPY . .

FROM node:18 as builder
WORKDIR /app/
COPY . .
RUN npm run build

FROM node:18 as runner
WORKDIR /app/
COPY . .
EXPOSE 80
CMD [ "node", "dist/main.js" ]