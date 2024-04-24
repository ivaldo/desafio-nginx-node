FROM    node:lts-alpine3.19 as builder
WORKDIR /tmp/app
COPY    . .
RUN     npm i && \
        npm i -g @angular/cli && \
        npm run build --configuration=production

FROM       nginx:1.25.5-alpine
WORKDIR    /usr/share/nginx/html
RUN        rm /etc/nginx/conf.d/default.conf
COPY       nginx.conf /etc/nginx/conf.d
COPY       --from=builder /tmp/app/dist/frontend/browser .
ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD        ["nginx", "-g", "daemon off;"]