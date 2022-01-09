FROM node:16

# Create app dir
WORKDIR /usr/src/app


COPY package.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .

RUN yarn build
ENV NODE_ENV development

ENV PORT 4000

CMD ["node", "dist/index.js"]
USER node