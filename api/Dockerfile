FROM node:latest

WORKDIR /usr/src/app

COPY . /usr/src/app
RUN npm install

COPY ./prisma ./prisma/
RUN npx prisma generate

CMD npm run dev