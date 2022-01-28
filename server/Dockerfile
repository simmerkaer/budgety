FROM node:16

# Create app dir
WORKDIR /src


COPY package.json ./
COPY yarn.lock ./

RUN yarn 

COPY . .

RUN yarn build
ENV NODE_ENV development

USER node
CMD ["node", "dist/index.js"]