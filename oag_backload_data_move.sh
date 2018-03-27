#!/bin/bash

mv /ADT/backload/oag/*.xml /ADT/backload/oag/tmp
chown wherescape:SSM /ADT/backload/oag/tmp/*.xml
cp /ADT/backload/oag/tmp/*.xml /ADT/archive/oag
for file in /ADT/backload/oag/tmp/*.xml; do
  [ -e "$file" ] || continue
  touch "${file}.done"
done
mv /ADT/backload/oag/tmp/*.xml.done /ADT/data/oag
mv /ADT/backload/oag/tmp/*.xml /ADT/data/oag