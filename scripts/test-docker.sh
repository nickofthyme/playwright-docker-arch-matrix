#!/usr/bin/env bash

set -e

### starts up a playwright docker container to run e2e tests

echo "Running playwright tests inside local docker container"

export DOCKER=true
export CI=true
export PORT=3000
# export HOST=host.docker.internal

# Run e2e playwright tests inside container
docker run \
  --ipc host `# recommended by playwright, see https://playwright.dev/docs/docker#end-to-end-tests` \
  --rm `# removes named container on every run` \
  --init `# handles terminating signals like SIGTERM` \
  --name e2e-playwright-tests `# reusable name of container` \
  -e DOCKER \
  -e CI \
  -e PORT \
  -e HOST \
  -w /app `# working directory` \
  -v $(pwd)/:/app `# mount local / directory in app/ directory in container` \
  mcr.microsoft.com/playwright:v1.51.1-noble \
  npm test -- "$@" # forward any additional passed args
