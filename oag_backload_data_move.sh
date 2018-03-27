#!/bin/bash

mv /ADT/backload/oag/*.xml /ADT/backload/oag/tmp
chown wherescape:SSM /ADT/backload/oag/tmp/*.xml
cp /ADT/backload/oag/tmp/*.xml /ADT/archive/oag
for file in /ADT/backload/oag/tmp/*.xml
do
  mv "$file" "${file%.xml}.xml.done"
done
mv /ADT/backload/oag/tmp/*.xml.done /ADT/data/oag