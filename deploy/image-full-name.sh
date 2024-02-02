#!/bin/sh

CURRENT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
IMAGE_TAG=$("$CURRENT_DIR"/image-tag.sh)
DOCKER_USERNAME=agamalievrustam37
DOCKER_REPO=recode-web-platform
IMAGE_FULL_NAME="$DOCKER_USERNAME"/"$DOCKER_REPO":"$IMAGE_TAG"
echo $IMAGE_FULL_NAME
