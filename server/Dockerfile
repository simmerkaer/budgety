FROM node:16

# Create app dir
WORKDIR /usr/src/app


COPY package.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .

RUN yarn build

ENV NODE_ENV production

ENV TYPEORM_URL postgres://postgres:admin@host.docker.internal:5432/demo
ENV PORT 4000

EXPOSE 8080

CMD ["node", "dist/index.js"]
USER node