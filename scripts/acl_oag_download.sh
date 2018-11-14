#!/bin/bash

set -e
set -x

echo "Backups starting..."

# Copy from S3 bucket
echo "Copying data directory to S3"
/usr/bin/aws s3 cp --recursive --quiet s3://$DATA_ARCHIVE_BUCKET_NAME/$ACL_S3_DESTINATION /ADT/scripts/ || echo "FAILED!"
/usr/bin/aws s3 cp --recursive --quiet s3://$DATA_ARCHIVE_BUCKET_NAME/$OAG_S3_DESTINATION /ADT/scripts/ || echo "FAILED!"

exit
