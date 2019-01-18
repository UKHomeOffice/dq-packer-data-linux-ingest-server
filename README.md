# DQ Packer Data Linux Ingest Server

[![Build Status](https://drone.digital.homeoffice.gov.uk/api/badges/UKHomeOffice/dq-packer-data-linux-ingest-server/status.svg)](https://drone.digital.homeoffice.gov.uk/UKHomeOffice/dq-packer-data-linux-ingest-server)

DQ Packer Data linux Ingest Server creates an AMI in AWS with Linux server configuration.

## Features

### `playbook.yml`

Ansible playbook installing the following:
- directory structure,
- applications and their dependencies,
- configuration from AWS,
- cronjobs.

### `.drone.yml`

Drone CI/CD configuration which builds the Packer image on push to master.

### `packer.json`

Requires AWS environment variables to be set. Builds CentOS Linux 7 image with Ansible playbook configuration.


## Additional Scripts

### `./scripts/acl_backup.sh`
Bash script for copying ACL DB file to S3. <br>

### `./scripts/acl_download.sh`
Bash script for downloading ACL DB files from S3 upon server creation. <br>
