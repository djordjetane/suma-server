const fs = require('fs');
require('./lib/db')
const services = require('./services');

const server = require('https').createServer({
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
});

const io = require('socket.io')(server);
const port = process.env.PORT || 7878;

const globalData = {
  currentLecture: 1
}

io.on('connection', onConnect);
server.listen(port, () => console.log('server listening on port ' + port));

//async function getCurrentLecture(id) { 
//  fs.readFile('currentLecture.txt', (err, data) => {
//    data.read
//    //return data.toString('utf-8').split('\n')[0].trim()
//  })
//}

function onConnect(socket) {    
  console.log(`New connection`)
    socket.on('disconnect', () => {
        console.log('diconnect');        
    }) 
        
    socket.on('scanned', async (qr, res = {success : false}) => {
        console.log(`New scan: ${qr.value}`);          
        if(!(await services.checkForUser(qr.value)).valueOf())
          socket.emit("done", {success : false, msg: 'Invalid user'} );
        else {
          await services.addAttendance(qr.value, globalData.currentLecture)
          .then(val => socket.emit("done", val ))
          .catch(msg => socket.emit("done", {success: true, msg: msg}))
          ;
        }
    } )

    socket.on('setLecture', async id => {
      if((await services.checkForLecture(id)).valueOf()) {        
        globalData.currentLecture = id; // sync
        socket.emit("done", { success: true } );
      }
      else
        socket.emit("done", { success: false, msg: 'Invalid lecture' } );
    })
}