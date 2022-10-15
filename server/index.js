require('./lib/db');
const port = process.env.PORT || 7878;
const Server = require('./lib/server');

(new Server(port, './ssl/key.pem', './ssl/cert.pem')).listen()
