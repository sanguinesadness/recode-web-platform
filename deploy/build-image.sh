#!/bin/bash

set -e

CURRENT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
IMAGE_FULL_NAME=$("$CURRENT_DIR"/image-full-name.sh)

echo [Main App] creating docker image with name "$IMAGE_FULL_NAME"...
docker build -t "$IMAGE_FULL_NAME" .
echo [Main App FINISHED] image has been built
