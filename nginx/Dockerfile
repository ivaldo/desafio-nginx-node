FROM nginx
COPY nginx.conf /etc/nginx/conf.d
ENV DOCKERIZE_VERSION v0.7.0
RUN apt-get update && \
    apt-get install -y wget tar && \
    wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin && \
    apt-get autoremove -yqq --purge wget && \
    rm -rf /var/lib/apt/lists/* && \
    touch /usr/share/nginx/html/index.html && \
    rm -rf /etc/nginx/conf.d/default.conf

ENTRYPOINT [ "/usr/local/bin/dockerize","-wait","tcp://node:3000","-timeout","40s" ]