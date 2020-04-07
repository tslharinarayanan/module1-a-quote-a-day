var express=require('express');
var app=express();

app.get('/hello',function(request,response){
	response.sendFile(__dirname+'/index.html');
})

var PORT=process.env.PORT || 8080;

var server=app.listen(PORT,function(req,res){
	console.log("Catch the action at http://localhost:"+PORT);
})