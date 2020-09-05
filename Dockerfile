FROM alpine

RUN apk update
RUN apk add nginx python3
RUN apk add openrc openrc-bash-completion curl

COPY docker/etc/nginx /etc/nginx
