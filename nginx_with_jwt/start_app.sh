docker run \
-v /home/webserver/static:/usr/share/nginx/html:ro \
-v ./conf/nginx_app.conf:/etc/nginx/nginx.conf:ro \
-v ./conf/keys/app:/home/keys:ro \
-p 1080:80 \
-p 1443:443 \
-i -t nginx-jwt-auth