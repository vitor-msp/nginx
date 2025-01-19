FROM nginx:1.25.1
RUN apt update && apt install -y apache2-utils
RUN mkdir -p /var/www/html \
    && touch /var/www/html/.htpasswd \
    && chmod 640 /var/www/html/.htpasswd \
    && chown root:nginx /var/www/html/.htpasswd
ENTRYPOINT ["nginx", "-g" ,"daemon off;"]