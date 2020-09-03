FROM php

ARG DEBIAN_FRONTEND=noninteractive

MAINTAINER Zsebe András

RUN apt-get update
RUN apt-get install -y openssh-server
RUN apt-get install -y sudo

RUN chown -R www-data:www-data /var/www/html
RUN chmod -R 775 /var/www/html
RUN unlink /opt/run.sh
RUN touch /opt/run.sh
RUN echo "chown -R www-data:www-data /var/www/html" >> /opt/run.sh
RUN echo "chmod -R 775 /var/www/html" >> /opt/run.sh
RUN echo "service ssh start" >> /opt/run.sh
RUN echo "/usr/sbin/apache2ctl -D FOREGROUND" >> /opt/run.sh


EXPOSE 80 443 22
CMD ["sh","/opt/run.sh"]