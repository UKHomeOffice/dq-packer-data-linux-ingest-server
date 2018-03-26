#!/bin/bash

mv /ADT/backload/acl/*.CSV /ADT/backload/acl/tmp
chown wherescape:SSM /ADT/backload/acl/tmp/*.CSV
cp /ADT/backload/acl/tmp/*.CSV /ADT/archive/acl
mv /ADT/backload/acl/tmp/*.CSV /ADT/data/acl