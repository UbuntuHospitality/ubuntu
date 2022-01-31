FROM node:16-slim

# set working directory
WORKDIR /ubuntu

# install app dependencies
COPY . .

RUN yarn install --ignore-engines

EXPOSE 8000
