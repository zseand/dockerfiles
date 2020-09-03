FROM centos:7

LABEL maintainer="Globenet - azsebe" email="info@globenet.hu"

ARG NGINX_VERSION=1.17.0

ENV LD_LIBRARY_PATH=/usr/local/lib

RUN yum -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm && \
    yum -y update && \
    yum -y groupinstall 'Development Tools' && \
    yum -y install pcre-devel pcre zlib-devel openssl-devel wget cmake check-devel check && \
    yum -y install nginx-$NGINX_VERSION && \
    yum -y install htop && \
    yum -y install mc

# for compiling for rh-nginx110
# yum -y install libxml2 libxslt libxml2-devel libxslt-devel gd gd-devel perl-ExtUtils-Embed

# for compiling for epel7
RUN yum -y install libxml2 libxslt libxml2-devel libxslt-devel gd gd-devel perl-ExtUtils-Embed geoip geoip-devel google-perftools google-perftools-devel

RUN mkdir -p /home/dl
WORKDIR /home/dl

# build jansson
ARG JANSSON_VERSION=2.10
RUN wget https://github.com/akheron/jansson/archive/v$JANSSON_VERSION.zip && \
    unzip v$JANSSON_VERSION.zip && \
    rm v$JANSSON_VERSION.zip && \
    ln -sf jansson-$JANSSON_VERSION jansson && \
    cd /home/dl/jansson && \
    cmake . -DJANSSON_BUILD_SHARED_LIBS=1 -DJANSSON_BUILD_DOCS=OFF && \
    make && \
    make check && \
    make install

# build libjwt
ARG LIBJWT_VERSION=1.9.0
RUN wget https://github.com/benmcollins/libjwt/archive/v$LIBJWT_VERSION.zip && \
    unzip v$LIBJWT_VERSION.zip && \
    rm v$LIBJWT_VERSION.zip && \
    ln -sf libjwt-$LIBJWT_VERSION libjwt && \
    cd /home/dl/libjwt && \
    autoreconf -i && \
    ./configure JANSSON_CFLAGS=/usr/local/include JANSSON_LIBS=/usr/local/lib && \
    make all && \
    make install

ADD . /home/dl/ngx-http-auth-jwt-module

RUN cd /home/dl && \
    wget http://nginx.org/download/nginx-$NGINX_VERSION.tar.gz && \
    tar -xzf nginx-$NGINX_VERSION.tar.gz && \
    ln -sf nginx-$NGINX_VERSION nginx && \
    cd /home/dl/nginx && \
    ./configure \
    --with-ld-opt="-Wl,-rpath,/usr/local/lib" \
    --add-dynamic-module=../ngx-http-auth-jwt-module \
    --prefix=/usr/share/nginx \
    --sbin-path=/usr/sbin/nginx \
    --modules-path=/usr/lib64/nginx/modules \
    --conf-path=/etc/nginx/nginx.conf \
    --error-log-path=/var/log/nginx/error.log \
    --http-log-path=/var/log/nginx/access.log \
    --http-client-body-temp-path=/var/lib/nginx/tmp/client_body \
    --http-proxy-temp-path=/var/lib/nginx/tmp/proxy \
    --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi \
    --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi \
    --http-scgi-temp-path=/var/lib/nginx/tmp/scgi \
    --pid-path=/run/nginx.pid \
    --lock-path=/run/lock/subsys/nginx \
    --user=nginx \
    --group=nginx \
    --with-file-aio \
    --with-ipv6 \
    --with-http_ssl_module \
    --with-http_v2_module \
    --with-http_realip_module \
    --with-http_addition_module \
    --with-http_xslt_module=dynamic \
    --with-http_image_filter_module=dynamic \
    --with-http_geoip_module=dynamic \
    --with-http_sub_module \
    --with-http_dav_module \
    --with-http_flv_module \
    --with-http_mp4_module \
    --with-http_gunzip_module \
    --with-http_gzip_static_module \
    --with-http_random_index_module \
    --with-http_secure_link_module \
    --with-http_degradation_module \
    --with-http_slice_module \
    --with-http_stub_status_module \
    --with-http_perl_module=dynamic \
    --with-mail=dynamic \
    --with-mail_ssl_module \
    --with-pcre \
    --with-pcre-jit \
    --with-stream=dynamic \
    --with-stream_ssl_module \
    --with-google_perftools_module \
    --with-debug \
    --with-cc-opt='-O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector-strong --param=ssp-buffer-size=4 -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -m64 -mtune=generic -std=gnu99' \
    --with-ld-opt='-Wl,-z,relro -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E' && \
    make modules && \
    cp /home/dl/nginx/objs/ngx_http_auth_jwt_module.so /usr/lib64/nginx/modules/. && \
    mkdir /build && \
    cp /home/dl/nginx/objs/ngx_http_auth_jwt_module.so /build.

# Get nginx ready to run
COPY resources/nginx.conf /etc/nginx/nginx.conf
RUN cp -r /usr/share/nginx/html /usr/share/nginx/secure
RUN cp -r /usr/share/nginx/html /usr/share/nginx/secure-rs256
RUN cp -r /usr/share/nginx/html /usr/share/nginx/secure-auth-header
RUN cp -r /usr/share/nginx/html /usr/share/nginx/secure-no-redirect

ENTRYPOINT ["/usr/sbin/nginx"]
#ENTRYPOINT ["htop"]

EXPOSE 80 443
