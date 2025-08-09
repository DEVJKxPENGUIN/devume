FROM node:22-alpine

ARG OUT_FILE=.output/
ARG PROTO_DIR=.proto/

COPY ${OUT_FILE} /app/
COPY ${PROTO_DIR} /app/proto/

ENTRYPOINT ["node", "/app/server/index.mjs"]
