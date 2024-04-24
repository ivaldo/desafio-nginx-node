FROM    node:lts-alpine3.19 as builder
WORKDIR /tmp/app
COPY    src ./src
COPY    prisma ./prisma
COPY    *.json .
RUN     npm i -g @nestjs/cli npm && \
        npm i && \
        npm run build

FROM    node:lts-alpine3.19     
WORKDIR /app
COPY    --from=builder /tmp/app/dist .
COPY    --from=builder /tmp/app/node_modules .
ENTRYPOINT [ "node", "main.js" ]