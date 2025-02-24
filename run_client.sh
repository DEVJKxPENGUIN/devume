#!/bin/bash

MODE="local"
RUN_TYPE="serve"

# parse arguments
while (("$#")); do

  if [ "-build" = $1 ]; then
    RUN_TYPE="build"
  fi
  if [ "-local" = $1 ]; then
    MODE=local
  fi
  if [ "-dev" = $1 ]; then
    MODE=dev
  fi
  shift
done

FULL_ARGS=""
if [ "$RUN_TYPE" = "serve" ]; then
  FULL_ARGS="npm run --prefix ./client dev"
fi

if [ "$RUN_TYPE" = "build" ]; then
  # FULL_ARGS="npm run --prefix ./client ${MODE}:electron"
  FULL_ARGS="npm run --prefix ./client build"
fi

echo MODE : ${MODE}
echo FULL_ARGS : "${FULL_ARGS}"
${FULL_ARGS}

