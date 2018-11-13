#!/bin/bash

set -e
set -x

echo "Backups starting..."

# Copy to S3 bucket
echo "Copying data directory to S3"
/usr/local/bin/aws s3 cp --quiet $OAG_DB_LOCATION s3://$DATA_ARCHIVE_BUCKET_NAME/$OAG_S3_DESTINATION || echo "FAILED!"

exit
