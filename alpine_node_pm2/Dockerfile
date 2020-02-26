FROM alpine

MAINTAINER "Zsebe András <zsebeandrastamas@gmail.com>"

ENV ALPINE_MIRROR "http://dl-cdn.alpinelinux.org/alpine"
RUN echo "${ALPINE_MIRROR}/edge/main" >> /etc/apk/repositories
RUN apk add -f --no-cache nodejs-current npm  --repository="http://dl-cdn.alpinelinux.org/alpine/edge/community"
RUN node --version
RUN apk update
RUN apk add -f install mc htop git ffmpeg curl wget dirmngr apt-transport-https lsb-release ca-certificates gcc g++ make
WORKDIR /tmp

RUN npm -v
RUN npm install -g pm2
RUN pm2 update

RUN mkdir /home/run
WORKDIR /home/run
RUN cd /home/run
RUN echo "cd /home/run" >> /opt/run.sh
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
EXPOSE 3000
CMD ["sh","/opt/run.sh"]
