#!/usr/bin/sh
npm install express
npm install body-parser
npm install jsonwebtoken
openssl rsa -pubout -in private_key.pem -out public_key.pem