#!/bin/bash

NODE_ENV="local"
RUN_TYPE="serve"
# parse arguments
while (("$#")); do

  if [ "-install" = $1 ]; then
    RUN_TYPE="install"
  fi
  if [ "-build" = $1 ]; then
    RUN_TYPE="build"
  fi
  shift
done

FULL_ARGS=""
if [ "$RUN_TYPE" = "serve" ]; then
  FULL_ARGS="npm run --prefix ./devume-client dev"
fi

if [ "$RUN_TYPE" = "build" ]; then
  # FULL_ARGS="npm run --prefix ./client ${MODE}:electron"
  FULL_ARGS="npm run --prefix ./devume-client build"
fi

if [ "$RUN_TYPE" = "install" ]; then
  FULL_ARGS="npm install --prefix ./devume-client"
fi

echo NODE_ENV : ${NODE_ENV}
echo FULL_ARGS : "${FULL_ARGS}"
export NODE_ENV=${NODE_ENV}
${FULL_ARGS}

