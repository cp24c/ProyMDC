FROM node:latest AS build
WORKDIR /src
RUN npm install -g @angular/cli

COPY package*.json ./
RUN npm ci

COPY . ./
RUN ng build --configuration=production

FROM nginx:latest AS final
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /src/dist/app-icfes/browser /usr/share/nginx/html
