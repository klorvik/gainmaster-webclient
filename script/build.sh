#!/usr/bin/env bash

set -e

npm install
bower install -p --allow-root --config.interactive=false

grunt build

cp -r build/* /srv/http/