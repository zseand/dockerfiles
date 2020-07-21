FROM ubuntu

MAINTAINER "Zsebe András <zsebeandrastamas@gmail.com>"

RUN apt-get update
RUN apt -y install curl wget dirmngr apt-transport-https lsb-release ca-certificates
RUN apt -y install gcc g++ make
WORKDIR /tmp
RUN curl -sL https://deb.nodesource.com/setup_13.x | bash - && apt-get update && apt-get upgrade -y && apt-get install -y nodejs
RUN node -v

RUN apt-get install -y mc
RUN apt-get install -y git
RUN apt-get install -y ffmpeg
RUN apt-get install -y lm-sensors && sensors-detect --auto

#RUN npm install Unitech/pm2#development -g
RUN npm -v
RUN npm install -g pm2
RUN npm install -g google-closure-compiler

#npx google-closure-compiler --js=index.js --js_output_file=out.js
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
