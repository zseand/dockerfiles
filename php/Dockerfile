FROM ubuntu

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update

RUN apt-get install -y --fix-missing apache2
COPY apache2.conf /etc/apache2/apache2.conf
RUN apt-get install -y --fix-missing git
RUN apt-get install -y --fix-missing php 
RUN apt-get install -y --fix-missing php-intl 
RUN apt-get install -y --fix-missing php-json 
RUN apt-get install -y --fix-missing php-gd 
RUN apt-get install -y --fix-missing gcc
RUN apt-get install -y --fix-missing make
RUN apt-get install -y --fix-missing htop
RUN apt-get install -y --fix-missing imagemagick
RUN apt-get install -y --fix-missing autoconf
RUN apt-get install -y --fix-missing libc-dev
RUN apt-get install -y --fix-missing pkg-config
RUN apt-get install -y --fix-missing php-pear
RUN apt-get install -y --fix-missing php-mysql 
RUN apt-get install -y --fix-missing php-curl 
RUN apt-get install -y --fix-missing php-curl
RUN apt-get install -y --fix-missing php-gd
RUN apt-get install -y --fix-missing php-dev
RUN apt-get install -y --fix-missing libmcrypt-dev
RUN apt-get install -y --fix-missing php-imagick
RUN apt-get install -y --fix-missing php-mbstring
#RUN pecl install mcrypt-1.0.1
RUN apt-get install -y --fix-missing php-xml
RUN apt-get install -y --fix-missing php-curl
RUN apt-get install -y --fix-missing php-sqlite3
RUN apt-get install -y --fix-missing php-pgsql
RUN apt-get install -y --fix-missing php-zip
RUN apt-get install -y --fix-missing php-json
RUN apt-get install -y --fix-missing mc
RUN apt-get install -y --fix-missing wget
RUN apt-get install -y --fix-missing unzip
RUN apt-get install -y --fix-missing zip
#RUN apt-get install -y --fix-missing rar
RUN apt-get install -y --fix-missing unrar
RUN apt-get install -y --fix-missing php-gmp
RUN apt-get install -y --fix-missing php-mongodb
RUN apt-get install -y --fix-missing php-bcmath
RUN apt-get install -y software-properties-common
RUN pecl install mongodb
#RUN echo "extension=mongodb.so" >> /etc/php/7.4/apache2/php.ini

WORKDIR /tmp
RUN cd /tmp

#RUN apt-get install -y --fix-missing sysinfo
RUN apt-get install -y --fix-missing inotify-tools


RUN apt-get install -y --fix-missing php-redis
RUN pecl install redis


RUN a2enmod rewrite
RUN apt-get install composer -y
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html
RUN unlink /var/www/html/index.html
RUN touch /opt/run.sh
RUN echo "chown -R www-data:www-data /var/www" >> /opt/run.sh
RUN echo "chmod -R 775 /var/www" >> /opt/run.sh
RUN echo "/usr/sbin/apache2ctl -D FOREGROUND" >> /opt/run.sh
EXPOSE 80 443
CMD ["sh","/opt/run.sh"]