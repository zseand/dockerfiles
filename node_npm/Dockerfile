FROM ubuntu
ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update
RUN apt -y install curl wget dirmngr apt-transport-https lsb-release ca-certificates
RUN apt -y install gcc g++ make
WORKDIR /tmp
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash - && apt-get update && apt-get upgrade -y && apt-get install -y nodejs
RUN node -v

RUN apt-get install -y mc
RUN apt-get install -y git

RUN npm -v

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
RUN echo "npm run start" >> /opt/run.sh
RUN echo '' >> /opt/run.sh
RUN echo '' >> /opt/run.sh
EXPOSE 3000
CMD ["sh","/opt/run.sh"]
