module.exports = {
  apps : [
    {
      name      : "nats-to-s3-archive",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "nats",
        INGEST_SOURCE_PATH : "/NATS/data/nats",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "nats-to-s3-archive.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "True",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "True",
        WRITE_AWS_S3_BUCKET_NAME : process.argv[7]
      }
    },
    {
      name      : "nats-to-s3-ga",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "nats",
        INGEST_SOURCE_PATH : "/NATS/data/ga",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "nats-to-s3-ga.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "False",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "False",
        WRITE_AWS_S3_ENCRYPT: "aws:kms",
        WRITE_AWS_S3_BUCKET_NAME : process.argv[8],
        WRITE_AWS_ACCESS_KEY_ID : process.argv[9],
        WRITE_AWS_SECRET_ACCESS_KEY : process.argv[10],
        WRITE_AWS_S3_HOST : "https://s3.eu-west-2.amazonaws.com",
        WRITE_AWS_S3_REGION : "eu-west-2"
      }
    },
    {
      name      : "oag-to-s3-archive",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "oag",
        INGEST_SOURCE_PATH : "/ADT/archive/oag",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "oag-to-s3-archive.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "True",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "True",
        WRITE_AWS_S3_BUCKET_NAME : process.argv[7]
      }
    },
    {
      name      : "acl-to-s3-archive",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "acl",
        INGEST_SOURCE_PATH : "/ADT/archive/acl",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "acl-to-s3-archive.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "True",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "True",
        WRITE_AWS_S3_BUCKET_NAME : process.argv[7]
      }
    },
    {
      name      : "ssm-to-s3-archive",
      script    : "/appdata/data-transfer/bin/data-transfer",
      interpreter: "python",
      env: {
        INGEST_DEST_PATH : "ssm",
        INGEST_SOURCE_PATH : "/ADT/archive/ssm",
        WRITE_STORAGE_TYPE : "datatransfer.storage.S3Storage",
        READ_STORAGE_TYPE : "datatransfer.storage.FolderStorage",
        LOG_FILE_NAME : "ssm-to-s3-archive.log",
        PROCESS_INTERVAL : 4,
        MAX_FILES_BATCH : 25,
        FOLDER_DATE_OUTPUT : "True",
        LOG_LEVEL : "INFO",
        USE_IAM_CREDS : "True",
        WRITE_AWS_S3_BUCKET_NAME : process.argv[7]
      }
    },
  ]
}
