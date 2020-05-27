#--env FTP_PROXY="ftp://127.0.0.1:3001"
#--env HTTPS_PROXY="https://127.0.0.1:3001"
#--env HTTP_PROXY="http://127.0.0.1:3001"
#--env NO_PROXY="*.test.example.com,.example2.com"

ssh -D 963 doki@bootor.net


curl 'http://api.dotroll.com/domains/list'
