#!/bin/bash

mv /ADT/backload/acl/*.CSV /ADT/backload/acl/tmp
chown wherescape:SSM /ADT/backload/acl/tmp/*.CSV
cp /ADT/backload/acl/tmp/*.CSV /ADT/archive/acl
for file in /ADT/backload/acl/tmp/*.CSV
do
  touch "${file%.CSV}.CSV.done"
done
mv /ADT/backload/acl/tmp/*.CSV.done /ADT/data/acl
mv /ADT/backload/acl/tmp/*.CSV /ADT/data/acl