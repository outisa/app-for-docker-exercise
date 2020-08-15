FROM node:13.12.0

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY  . ./

RUN npm install \
    && npm run build \
    && npm install -g serve

EXPOSE 5000
CMD serve -s build
