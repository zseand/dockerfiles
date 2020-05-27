module.exports = {
    port: 1081,
    url_success: "https://kisgep.hu:1443/only_logged/",
    private_key_file: "./keys/rivate_key.pem",
    valid_users: {
        "info@globenet.hu": 123456,
        "test@globenet.hu": 123456
    },
    /*
    expiresIn:  60, "2 days", "10h", "7d"
	*/
    valid_time: "7d",
    token_subject: "example"
};