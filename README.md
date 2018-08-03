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

### `acl_backload_data_move.sh`
Bash script for moving CSV files. <br>

### `ecosystem.config.js`
PM2 configuration file. <br>

### `oag_backload_data_move.sh`
Shell script for moving XML files. <br>

### `startcloudwatchlogs.sh`
Shell script for  AWS Cloudwatch configuration.<br>






