#!/bin/bash

mv /ADT/backload/acl/*.CSV /ADT/backload/acl/tmp
chown wherescape:SSM /ADT/backload/acl/tmp/*.CSV
mv /ADT/backload/acl/tmp/*CSV /ADT/data/acl