const fs = require('fs');
const services = require('./services');
const https = require('https');

class Server extends https.Server {    
  
    constructor(port, keyPath, certPath) {        
        super( https.createServer({
            key: fs.readFileSync(keyPath),
            cert: fs.readFileSync(certPath),
          })
        );

        this.port = port;
        this.io = require('socket.io')(this);
        this.io.on('connection', Server.#onConnect);
    }

    listen = () => {
        super.listen(this.port, () => console.log('server listening on port ' + this.port))
    }    

    static #onConnect = (socket) => {
    console.log(`New connection`)
        socket.on('disconnect', () => {
            console.log('diconnect');        
        }); 
            
        socket.on('scanned', async (qr, res = {success : false}) => {
            console.log(`New scan: ${qr.value}`);          
            if(!(await services.checkForUser(qr.value)).valueOf())
            socket.emit("done", {success : false, msg: 'Invalid user'} );
            else {
                await services.addAttendance(qr.value, qr.lecture)
                    .then(val => socket.emit("done", val ))
                    .catch(msg => socket.emit("done", {success: true, msg: msg}));
            }
        } );
    }
};

module.exports = Server;