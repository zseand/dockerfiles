FROM debian

ARG DEBIAN_FRONTEND=noninteractive

MAINTAINER Zsebe András

RUN apt-get update

RUN apt-get install -y apache2
RUN apt-get install -y php 
RUN apt-get install -y php-intl 
RUN apt-get install -y php-json 
RUN apt-get install -y php-gd 
RUN apt-get install -y php-mcrypt 
RUN apt-get install -y php-mysql 
RUN apt-get install -y php-curl 
RUN apt-get install -y libapache2-mod-php
RUN apt-get install -y php-curl
RUN apt-get install -y php-gd
RUN apt-get install -y php7.0
RUN apt-get install -y libapache2-mod-php7.0 
RUN apt-get install -y php-imagick
RUN apt-get install -y php-mbstring
RUN apt-get install -y php-xml
RUN apt-get install -y php-curl
RUN apt-get install -y php-sqlite3
RUN apt-get install -y php-pgsql
RUN apt-get install -y php-zip
RUN apt-get install -y mc
RUN apt-get install -y wget
RUN apt-get install -y unzip
RUN a2enmod rewrite
RUN apt-get install composer -y
RUN cd /tmp
WORKDIR /tmp
RUN wget https://github.com/Codiad/Codiad/archive/v.2.8.4.zip
RUN cd /tmp && ls
RUN unzip /tmp/v.2.8.4.zip -d codiad && cd /tmp/codiad
RUN cp -a /tmp/codiad/Codiad-v.2.8.4/. /var/www/html/
RUN cd /var/www/html && ls
RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html
RUN unlink /var/www/html/index.html
EXPOSE 80 443
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]