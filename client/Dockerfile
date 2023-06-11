FROM node:18-alpine as base
WORKDIR /app/
COPY package*.json .
RUN npm i
COPY . .

FROM node:18-alpine as builder
WORKDIR /app/
RUN npm run build


FROM node:18-alpine as runner
WORKDIR /app/
EXPOSE 80
ENTRYPOINT ["sh", "-c", "npx serve -s build -l 80"]