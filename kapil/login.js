var http = require('http')

var server = http.createServer(function(req,res){
    res.writeHead(200,{"contentType":"text/html"})
    var college="niet"
res.write(
    "<!DOCTYPE html"+
     "<html>"+
'<meta charset="utf-8" />' +
"<title>login</title>" +
"<body>"+
'<h1 style="color:#FF0000;">My First Login Form</h1>' +
"First name:" +
'<input type="text" name="fname">' +
"<br>" +
"Last name:"+
'<input type="text" name="lname">' +
"<br>" +
'<button type="submit" form="nameform" value="Submit">' +
"Submit" +
"</button>"+
"</body>" +
"</html>" +
"</body>" +
"</html>")
res.end()
})

server.listen(1337)