
var SB= require("spacebrew");

var sb_host = "192.168.1.117";

var name ="CCT_in";

var description = "iteractive tech";

var sb  = new SB.Client(sb_host, name, description);




sb.onStringMessage = function(name, value){
    console.log(name + " " + value);
};

sb.addSubscribe("in_tick", "string");
sb.connect();



