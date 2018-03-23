#!/bin/bash

mv /ADT/backload/oag/*.xml /ADT/backload/oag/tmp
chown wherescape:SSM /ADT/backload/oag/tmp/*.xml
mv /ADT/backload/oag/tmp/*xml /ADT/data/oag