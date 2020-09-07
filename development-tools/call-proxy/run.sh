#!/bin/sh

while [ true ]
do
    echo $(date)
    curl --max-time 1 http://localhost:5554
    sleep 15
done
