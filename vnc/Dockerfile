FROM ubuntu

ENV TZ=Europe/Budapest
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update && \
    apt-get upgrade -y &&\
    DEBIAN_FRONTEND=noninteractive \
    apt-get install -y x11vnc xvfb xterm fluxbox firefox net-tools inetutils-ping inetutils-traceroute mc htop filezilla wget apt-transport-https curl gnupg bmon

# Create and configure the VNC user
ARG VNCPASS
ENV VNCPASS ${VNCPASS:-secret}

RUN useradd remote --create-home --shell /bin/bash --user-group --groups adm,sudo && \
    echo "remote:$VNCPASS" | chpasswd

EXPOSE 80
EXPOSE 5900

VOLUME /data
WORKDIR /data

RUN curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
RUN echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ stable main" | tee /etc/apt/sources.list.d/brave-browser-release.list
RUN apt update
RUN apt install -y brave-browser
COPY main.sh /

ENTRYPOINT ["/main.sh"]
CMD ["default"]

