#!/usr/bin/env bash
# Script to setup Nginx Development server by Saviour
apt-get -y update
apt-get -y install nginx
ufw allow 'Nginx HTTP'
mkdir -p /var/www/html
mkdir -p /var/www/hng.com/html
chown $USER:$USER /var/www/
chown $USER:$USER /var/www/hng.com/
chmod +x /var/www/


echo "Welcome to DevOps Stage 0 - [Saviour Davies Akalia]/[SavageAku]" > /var/www/hng.com/index.html
#echo "Welcome to DevOps Stage 0 - [Saviour Davies Akalia]/[SavageAku]" > /var/www/html/index.html

cp /etc/nginx/sites-available/default /etc/nginx/sites-available/hng.com
sed -i.bak /etc/nginx/sites-available
sed -i 's/root \/var\/www\/html/\/var\/www\/hng.com\/index.html' /etc/nginx/sites-available/hng.com
sed -i 's/listen 80 default_server;/listen 80;' /etc/nginx/sites-available/hng.com
sed -i 's/listen [::]:80 default_server;/listen [::]:80' /etc/nginx/sites-available/hng.com


# Reload Nginx Server
nginx -s reload

# Ensure Nginx is running
service nginx start

# Output the status of the Nginx service
service nginx status
