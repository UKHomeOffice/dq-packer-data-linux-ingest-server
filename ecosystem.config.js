module.exports = {
  apps : [
    {
      name      : "data-transfer-s3-archive",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "nats",
        INGEST_SOURCE_PATH : "/NATS/data/nats",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "data-transfer-s3-archive.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "True",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "True",
        WRITE_AWS_S3_BUCKET_NAME : "s3-dq-data-archive-bucket-notprod"
      }
    },
    {
      name      : "data-transfer-s3-ga",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "nats",
        INGEST_SOURCE_PATH : "/NATS/data/nats",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "data-transfer-s3-ga.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "False",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "False",
        WRITE_AWS_S3_BUCKET_NAME : "dq-apps-prod-gait-s3",
        WRITE_AWS_ACCESS_KEY_ID : process.env.GA_BUCKET_ACCESS_KEY_ID,
        WRITE_AWS_SECRET_ACCESS_KEY : process.env.GA_BUCKET_SECRET_ACCESS_KEY,
        WRITE_AWS_S3_HOST : "https://s3.eu-west-2.amazonaws.com",
        WRITE_AWS_S3_REGION : "eu-west-2"
      }
    },
  ]
}
