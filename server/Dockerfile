From node:alpine
WORKDIR "/app"
COPY ./package.json ./
RUN apk --no-cache add --virtual builds-deps build-base python
COPY . .
RUN npm install
CMD ["npm", "run", "start"]