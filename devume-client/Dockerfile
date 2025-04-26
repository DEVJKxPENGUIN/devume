FROM node:22-alpine

ARG OUT_FILE=.output/
ENV NODE_ENV=prod

COPY ${OUT_FILE} /app/

ENTRYPOINT ["node", "/app/index.mjs"]
