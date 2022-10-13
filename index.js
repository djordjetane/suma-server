const express = require('express');
const fs = require('fs');
const mid = require('./middleware');

const server = require('https').createServer({
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
});
//, app);
const io = require('socket.io')(server);
const port = process.env.PORT || 7878;

// app.use(express.static(__dirname + '/'));

io.on('connection', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

function onConnect(socket){  
  console.log(`New connection`)
    socket.on('disconnect', () => {
        console.log('diconnect');
    }) 
        
    socket.on('scanned', async qr => {
        console.log(`New scan: ${qr.value}`);        
        socket.emit("done", { success : mid.processRequest(qr) });
    } )
}