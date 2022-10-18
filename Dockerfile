FROM node:16-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .

ENV PORT=8091

ENV VUE_APP_API=https://ruletas-api.kingconnections.net/

RUN yarn build

# production stage
FROM nginx:1.20-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 8091
CMD ["nginx", "-g", "daemon off;"]

# docker build -t ruletas-admin .
# docker run -d --network host ruletas-admin