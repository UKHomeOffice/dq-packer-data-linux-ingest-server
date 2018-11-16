#!/bin/bash

set -e
set -x

cd /appdata/data-transfer
source ~/.virtualenvs/data-transfer/bin/activate
export PYTHONPATH=.
pm2 start -u wherescape ecosystem.config.js -- $DATA_ARCHIVE_BUCKET_NAME $GA_BUCKET_NAME $GA_BUCKET_ACCESS_KEY_ID $GA_BUCKET_SECRET_ACCESS_KEY
pm2 save

exit
