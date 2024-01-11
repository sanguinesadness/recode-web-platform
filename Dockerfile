# build
FROM node:alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn build

# production
FROM nginx:stable-alpine
COPY --from=build /app/dist /var/www/dist
COPY --from=build /app/.nginx/nginx.conf /etc/nginx/sites-available/default
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
