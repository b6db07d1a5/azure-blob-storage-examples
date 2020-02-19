FROM node:10-alpine as build

WORKDIR /tmp

RUN apk update && apk add --no-cache --virtual .build-deps \
	python \
	g++ \
	make \
	git

COPY ./main_server/package*.json /tmp/api/main_server/

RUN cd api/main_server && yarn install

RUN apk del .build-deps


FROM node:10-alpine
ENV TERM=xterm-256color

# Set umask to 027
RUN umask 027 && echo "umask 0027" >> /etc/profile

COPY --from=build /var/cache/apk /var/cache/apk
RUN apk add --no-cache jq bash openssl curl && rm -rf /var/cache/apk

COPY ./main_server /api/main_server
COPY --from=build /tmp/api/main_server/node_modules /api/main_server/node_modules

WORKDIR /api/main_server

RUN yarn run build

# Change owner to nobodoy:nogroup and permission to 640
RUN chown -R nobody:nogroup /api
RUN chmod -R 640 /api

ENTRYPOINT [ "node", "/api/main_server/build/server.js" ]
