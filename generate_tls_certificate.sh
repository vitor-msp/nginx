#!/bin/bash
SAN=$1
SAN_FILE=$2

# CA
openssl genrsa -out ca.key 4096
openssl req -x509 -new -nodes -key ca.key -sha256 -days 365 -out ca.crt

# # Site Certificate
openssl genrsa -out server.key 2048

if [ $SAN == "--san" ]; then
    openssl req -new -key server.key -out server.csr -config $SAN_FILE
    openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256 -extfile $SAN_FILE -extensions req_ext
    exit 0
fi

openssl req -new -key server.key -out server.csr
openssl x509 -req -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out server.crt -days 365 -sha256
exit 0