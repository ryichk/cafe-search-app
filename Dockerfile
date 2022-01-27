FROM node:15.14-alpine
WORKDIR /app
COPY . /app

RUN yarn

CMD ["yarn", "dev"]
