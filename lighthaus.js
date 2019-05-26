DEBUG=true;
HOST = process.env.HOST || 'localhost'; // localhost
PORT = process.env.PORT || 14000;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

LIGHTHAUS_COMMAND_FILE = '/home/pi/rpi_ws281x/python/command.txt'

//LIGHTHAUS_COMMAND_FILE = './command.txt'

var sys = require("sys")
, shell = require('shelljs')
, fs = require("fs")
, util = require("util")
, url = require("url")
, http = require("http")
, https = require("https")
, qs = require("querystring")
, bodyParser = require("body-parser")
, express = require("express")
;

// NEED TLS FOR CHROME TO ENABLE navigator.bluetooth

var logs=[];
    
function log(x) {
//    logs.push(x); // bloats memory!
//    console.log(x);
}

app = express();


var starttime = (new Date()).getTime();

var mem = process.memoryUsage();
// every 10 seconds poll for the memory.
/* setInterval(function () {
    mem = process.memoryUsage();
}, 10*1000);
*/

function logMemoryUsage(msg) {
    log( process.memoryUsage() + ": " + msg);
}

var app=express();

https.createServer({
      key: fs.readFileSync('key.pem'),
      cert: fs.readFileSync('cert.pem')
    }, app).listen(14443);


app.use(express.static(__dirname+ '/html'));  // What this does and no one will tell you is that requests to /index.html will return the files in the html/ directory on the server.

app.listen(Number(process.env.PORT || PORT), HOST);

sys.puts("Server up at " + app.get('env.HOSTNAME') + " on " + HOST +":" +PORT);
sys.puts("Go to https://" + HOST +":14443 to view lighthaus page.");
sys.puts("Secure https needed for google chrome and navigator.bluetooth");
				    
app.use("/lighthaus", bodyParser(), function (req,res) {
    command = req.query.command;
    console.log (command);
    console.log (LIGHTHAUS_COMMAND_FILE);
    cmd = "echo '" + command + "' > " +LIGHTHAUS_COMMAND_FILE;
    console.log(cmd);
    shell.exec(cmd, {silent:true});
//    fs.writeFileSync(LIGHTHAUS_COMMAND_FILE +"\n", command, {"encoding":"utf8"});
    res.type('json').status(200).json({"message":"Command accepted","command":command });
});
				

  
