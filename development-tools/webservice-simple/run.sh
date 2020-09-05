#!/bin/sh

while true
do
    echo $(date)
    echo 'HTTP/1.1 200 OK\r\n' | nc -l 5555
done
