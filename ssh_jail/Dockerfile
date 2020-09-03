FROM ubuntu
RUN apt-get update
RUN apt-get install -y openssh-server && service ssh start
RUN apt-get install -y mc
RUN apt-get install -y htop
RUN apt-get install -y net-tools
RUN apt-get install -y sudo

RUN useradd ssh_jail
RUN mkdir /home/ssh_jail
RUN chown -R ssh_jail:ssh_jail /home/ssh_jail
RUN chmod -R 775 /home/ssh_jail
RUN echo 'ssh_jail:ssh_jail' | chpasswd
RUN adduser ssh_jail sudo

RUN echo "#added:" >> /etc/ssh/sshd_config
RUN echo "LogLevel INFO" >> /etc/ssh/sshd_config
RUN echo "SyslogFacility AUTHPRIV" >> /etc/ssh/sshd_config

#RUN touch /var/log/auth.log
RUN echo "service ssh start" >> /opt/run.sh
RUN echo "sleep 3600" >> /opt/run.sh
RUN echo "tail -f /var/log/syslog" >>/opt/run.sh
CMD ["sh","/opt/run.sh"]
EXPOSE 22