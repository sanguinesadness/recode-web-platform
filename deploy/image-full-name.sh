#!/bin/sh

CURRENT_DIR=$(cd -P -- "$(dirname -- "$0")" && pwd -P)
IMAGE_TAG=$("$CURRENT_DIR"/image-tag.sh)
CR_REGISTRY=agamalievrustam37
CR_REPOSITORY=recode-web-platform
IMAGE_FULL_NAME="$CR_REGISTRY"/"$CR_REPOSITORY"/recode-app:"$IMAGE_TAG"
echo $IMAGE_FULL_NAME
