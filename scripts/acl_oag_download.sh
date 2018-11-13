#!/bin/bash

set -e

echo "Backups starting..."

# Copy from S3 bucket
echo "Copying data directory to S3"
/usr/local/bin/aws s3 cp --quiet s3://$BUCKET_NAME/data-linux-ingest-backups/acl/aclhistory.db /ADT/scripts/ || echo "FAILED!"
/usr/local/bin/aws s3 cp --quiet s3://$BUCKET_NAME/data-linux-ingest-backups/acl/oabhistory.db /ADT/scripts/ || echo "FAILED!"
