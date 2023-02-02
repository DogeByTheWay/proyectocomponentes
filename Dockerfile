FROM php:8.1.1-apache

ENV APACHE_DOCUMENT_ROOT /home/app/web

RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

ENV APP_WEB=/home/app/web \
    APP_PHP=/home/app/php

RUN mkdir -p /home/app \
    && mkdir $APP_WEB \
    && mkdir $APP_PHP

WORKDIR $APP_WEB

RUN a2enmod rewrite && docker-php-ext-install pdo pdo_mysql
COPY --from=composer/composer /usr/bin/composer /usr/bin/composer
RUN apt-get update
RUN apt-get install git -y


