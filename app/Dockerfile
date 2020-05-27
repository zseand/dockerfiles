FROM ubuntu

MAINTAINER "Zsebe András <zsebeandrastamas@gmail.com>"

RUN apt-get update

RUN apt-get install -y nodejs
RUN apt-get install -y npm
RUN apt-get install -y mc
RUN apt-get install -y git
RUN apt-get install -y ffmpeg

#RUN npm install Unitech/pm2#development -g
RUN npm install -g pm2
RUN pm2 update

RUN mkdir /home/run
WORKDIR /home/run
RUN cd /home/run
RUN echo "cd /home/run/node" >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo 'if [ ! -d "node_modules" ]; then' >> /opt/run.sh
RUN echo '# Control will enter here if $DIRECTORY doesnt exist.' >> /opt/run.sh
RUN echo 'echo "no node_modules dir->npm install"' >> /opt/run.sh
RUN echo 'npm install' >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo 'fi' >> /opt/run.sh
RUN echo 'ls' >> /opt/run.sh
RUN echo "pm2 --log all.log start ecosystem.config.js" >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo "pm2 logs " >> /opt/run.sh
RUN echo '' >> /opt/run.sh

CMD ["sh","/opt/run.sh"]

EXPOSE 8000 8443