
var SB= require("spacebrew");

var sb_host = "192.168.1.57";

var name ="CCT";

var description = "iteractive tech";

var sb  = new SB.Client(sb_host, name, description);

sb.addPublish("tick", "string", "tick tock");
var i = 0;

sb.connect();

setInterval(function(){
    
    sb.send("tick", "string", "listen up!" + i);
    i++;
    console.log('sent ' + i);
}, 1000);
