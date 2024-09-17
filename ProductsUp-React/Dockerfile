# HOW TO USE
# cd ProductsUp-React
# docker build . -t "procar-react-v1.0"
# Run in Docker Desktop (3000:3000)

FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]