# Client App
FROM node:10.13-alpine as client-app
LABEL authors="John Papa"
WORKDIR /usr/src/app
COPY ["package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --silent
COPY . .
RUN npx ng build --prod

# Node server
FROM node:10.13-alpine as node-server
WORKDIR /usr/src/app
COPY server/package.json ./
RUN npm install --production --silent && mv node_modules ../
COPY server/ ./

# Final image
FROM node:10.13-alpine
WORKDIR /usr/src/app
COPY --from=node-server /usr/src /usr/src
COPY --from=client-app /usr/src/app/dist/heroes-angular ./
EXPOSE 9626
CMD ["npm", "start"]
