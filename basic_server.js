#!/usr/bin/nodejs

console.log("Hello!");
var app = require('http').createServer(handler);
var child = require('child_process');
app.listen(8090);


//HTML handler
function handler (req, res)
{
sel=req.url.substr(1);
remote_ip=req.connection.remoteAddress;
console.log("Got a request from "+remote_ip);
if (sel != "diskstat.html")
{
  sel = "diskstat.html"; // only allow this file for now
}

res.writeHead(200);
prog=child.exec("ping -c 4 "+remote_ip, function(error, data, stderr)
{
  res.end(data);
});

} // end of HTML handler

