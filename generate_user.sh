#!/bin/bash

read -p "Username: " username
read -sp "Password for user $username: " password
echo ""

docker exec site htpasswd -b /var/www/html/.htpasswd $username $password

exit 0