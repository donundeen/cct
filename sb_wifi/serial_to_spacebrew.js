var Serial = require("serialport");
var SB = require("spacebrew");
var fs = require("fs");
//comments

var ip = require("ip");
var ip_address = ip.address() ;
console.log("ip is");
console.log(ip_address);


var files = fs.readdirSync("/dev/serial/by-id");
var portname = false;
files.forEach(function(filename){
  if(filename.match(/Arduino/)){
    portname = "/dev/serial/by-id/"+ filename;
    console.log("port is " + portname);
  }  
});

if(!portname){
  console.log("don't have an arduino to listen to!");
  process.exit(1);
}

var serialport = require("serialport");
var SerialPort  = serialport.SerialPort;
var serialPort = new SerialPort(portname, {
  baudrate: 9600,
  parser: serialport.parsers.readline("\n") 
});

var sb_host = "192.168.1.57";
var name ="CCT"+ip_address.toString();
var description = "iteractive tech";
var sb  = new SB.Client(sb_host, name, description);
sb.addPublish("tick", "range", "tick tock");
sb.connect();


serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
  	data = data.toString().trim();
    console.log(data);
    sb.send("tick", "range", data);      
  });  
});


console.log("done");




