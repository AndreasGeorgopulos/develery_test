FROM php:8.3-apache

RUN apt update

RUN apt install -y git
RUN apt install -y zip
RUN apt install -y curl
RUN apt install -y unzip
RUN apt install -y libicu-dev
RUN apt install -y libbz2-dev
RUN apt install -y libpng-dev
RUN apt install -y libjpeg-dev
RUN apt install -y libmcrypt-dev
RUN apt install -y libreadline-dev
RUN apt install -y libfreetype6-dev
RUN apt install -y libzip-dev
RUN apt install -y g++
RUN apt install -y nodejs

RUN docker-php-ext-install bz2
RUN docker-php-ext-install intl
RUN docker-php-ext-install iconv
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install opcache
RUN docker-php-ext-install calendar
RUN docker-php-ext-install pdo_mysql
RUN docker-php-ext-install zip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install Symfony Cli
COPY ./docker/php-apache/symfony-cli-installer /root/symfony-cli-installer
RUN /root/symfony-cli-installer
RUN mv /root/.symfony5/bin/symfony /usr/local/bin/symfony

# Install NPM
#RUN apt upgrade -y
#RUN apt install npm -y --fix-missing

RUN a2enmod rewrite
