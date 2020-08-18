FROM node:alpine as builder

WORKDIR /app
COPY  . ./

RUN npm install && \
    npm run build && \
    rm -rf /app/node_modules/*

FROM node:alpine as app

COPY --from=builder app .

RUN npm install -g serve && \
    adduser -D app

USER app

EXPOSE 5000
CMD serve -s build
