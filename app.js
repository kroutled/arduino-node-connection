const SerialPort = require('serialport');
const http = require('http');
const fs = require('fs');

var index = fs.readFileSync('./index.html');
const parsers = SerialPort.parsers;
const parser = new parsers.Readline({
    delimiter: '\r\n'
});

var comPort = process.argv[2];

var port = new SerialPort(comPort, {
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

port.pipe(parser);

var app = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-type':'text/html'});
    res.end(index);
});

const io = require('socket.io').listen(app);
io.on('connection', function(data){
    console.log('Node.js is listening...');
});

parser.on('data', function(data) {
    console.log(data);
    io.emit('data', data);
});

app.listen(3000);