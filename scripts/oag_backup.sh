#!/bin/bash

set -e

echo "Backups starting..."

# Copy to S3 bucket
echo "Copying data directory to S3"
/usr/local/bin/aws s3 cp --quiet /ADT/scripts/oaghistory.db s3://$BUCKET_NAME/data-linux-ingest-backups/oag/ || echo "FAILED!"
