#!/bin/bash
systemctl stop clamd@scan
chown -R wherescape:SSM /var/run/clamd.scan
systemctl start clamd@scan
