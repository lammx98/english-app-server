FROM node:18-alpine
WORKDIR /
COPY package.json ./
COPY tsconfig.json ./
COPY . .
RUN npm install
EXPOSE 3001
CMD [ "npm", "run", "start:prod" ]