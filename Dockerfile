# build environment
FROM node as build
WORKDIR /datafoundation_lk
ENV PATH /datafoundation_lk/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent
RUN npm install react-scripts@3.4.1 -g --silent
COPY . .
RUN npm run build

# production environment
FROM nginx
COPY --from=build /datafoundation_lk/build /usr/share/nginx/html/datafoundation_lk

# new
COPY --from=build /datafoundation_lk/nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /datafoundation_lk/nginx/mime.types /etc/nginx/conf.d/mime.types

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
