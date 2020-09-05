FROM nginxinc/nginx-unprivileged:alpine

USER root

RUN apk update
#RUN apk add openrc nginx python3 py3-oauthlib py3-requests-oauthlib
RUN apk add python3 py3-oauthlib py3-requests-oauthlib

#COPY --chown=nginx:nginx docker/etc/nginx/conf.d/default.conf /etc/nginx/conf.d/
COPY  --chown=nginx:nginx docker/etc/nginx/templates /etc/nginx/templates

COPY --chown=nginx:nginx docker/tools.py /
COPY --chown=nginx:nginx docker/update-nginx.py /
COPY --chown=nginx:nginx docker/docker-entrypoint.d/50-update-nginx.sh /docker-entrypoint.d/

#ENTRYPOINT ["/update-nginx.py"]
#CMD ["nginx", "-g", "daemon off;"]

#CMD /update-nginx.py && nginx;
USER 101

CMD ["nginx", "-g", "daemon off;"]
