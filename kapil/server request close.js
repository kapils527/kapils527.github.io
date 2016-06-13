var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res)
{
   res.writeHead(200)
   var page = url.parse(req.url).pathname;
   if(page=="/login"){
       res.write("login successfull")
   }
    else
    {
        res.write("login fail")
       
    }
        
        res.end();
})
server.on("close",function (){
    console.log('server closed')
})

server.listen(1337)
server.close();