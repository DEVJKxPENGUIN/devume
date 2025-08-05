#!/bin/bash

DEBUG=false
CLEAN=""
RUN_MODULE="devume-api"
RUN_DIRECTORY=""
MODE="local"
RUN_TYPE="spring" ## spring or npm
GRADLE_TASK="bootRun"
EXTRA=""

# parse arguments
while (("$#")); do
  if [ "-debug" = $1 ]; then
    DEBUG=true
    echo "DEBUG = ${DEBUG}"
  fi
  if [ "-clean" = $1 ]; then
    CLEAN=clean
    echo "CLEAN = true"
  fi
  if [ "-local" = $1 ]; then
    MODE=local
  fi
  if [ "-dev" = $1 ]; then
    MODE=dev
  fi
  if [ "-test" = $1 ]; then
    GRADLE_TASK=test
  fi
  if [ "-summary" = $1 ]; then
    EXTRA=" -Psummary=true"
  fi
  if [ "-build" = $1 ]; then
    GRADLE_TASK=build
  fi
  shift
done

if [ ${RUN_TYPE} = "spring" ]; then

  # process run options
  ARGS="--stacktrace --debug --quiet"
  if [ "${GRADLE_TASK}" = "test" ]; then
    ARGS="--rerun ${EXTRA}"
  fi
  if [ ${DEBUG} = true ]; then
    ARGS="${ARGS} --debug-jvm ${EXTRA}"
  fi

  # make full args
  # shellcheck disable=SC2089
  if [ "${GRADLE_TASK}" = "test" ] || [ "${GRADLE_TASK}" = "build" ]; then
    FULL_ARGS="./gradlew ${CLEAN} $RUN_MODULE:$GRADLE_TASK ${ARGS}"
  else
    FULL_ARGS="./gradlew ${CLEAN} $RUN_MODULE:$GRADLE_TASK ${ARGS} --args='--spring.profiles.active=${MODE}'"
  fi

  echo ARGS : "${ARGS}"
  echo MODE : ${MODE}
  echo FULL_ARGS : "${FULL_ARGS}"

  # gradle run
  # shellcheck disable=SC2090
  #export DB_HOST=${DB_HOST}
  #export DB_USERNAME=${DB_USERNAME}
  #export DB_PASSWORD=${DB_PASSWORD}
  #export REDIS_HOST=${REDIS_HOST}
  #export REDIS_PORT=${REDIS_PORT}
  #export REDIS_PASSWORD=${REDIS_PASSWORD}
  ${FULL_ARGS}
fi
