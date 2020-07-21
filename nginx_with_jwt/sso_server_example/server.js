/**
Required:
https://github.com/auth0/node-jsonwebtoken
*/
const port = 1081;
const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const config = require("./config.js");

const app = express();
app.use(bodyParser.urlencoded());

app.post("/do-login", function (req, res) {
	var logged = false;
	if (req.body.user_email) {
		if (req.body.user_pass) {
			if (config.valid_users[req.body.user_email] && config.valid_users[req.body.user_email] == req.body.user_pass) {
				// sign with RSA SHA256
				var token = jwt.sign({
					email: req.body.user_email,
					subject: config.token_subject || "token"
				}, fs.readFileSync(config.private_key_file, "utf8"), {
					algorithm: 'RS256',
					expiresIn: config.valid_time
				});
				if (logged) {
					var response = {
						"return_url": req.body.return_url || config.url_success,
						"jwt_token": "Bearer" + token
					};
					res.end(JSON.stringify(response));
				}
			} else {
				console.log("Invalid user_mail/password!");
				res.end("Invalid user_mail/password!");
			}
		} else {
			console.log("Missing user_pass!");
		}
	} else {
		console.log("Missing user_email!");
	}
});
app.use(function (req, res) {
	res.status(404).end('error');
});

app.listen(config.port, () => console.log(`nodejs sso app listening on port ${config.port}!`));