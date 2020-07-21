docker run \
-v /home/webserver/static:/usr/share/nginx/html:ro \
-v ./conf/nginx_proxy.conf:/etc/nginx/nginx.conf:ro \
-v ./conf/keys/proxy:/home/keys:ro \
-p 80:80 \
-p 443:443 \
-i -t nginx-jwt-auth