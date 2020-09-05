FROM alpine

RUN apk update
RUN apk add nginx

COPY docker/etc/nginx /etc/nginx
