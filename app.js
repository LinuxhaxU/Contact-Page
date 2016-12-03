// Put in your express server here. Use index.html for your
// view so have the server direct you to that.
// 1) Require http
var http = require("http");
var express = require("express");
var app = express();
var request = require('request')
var fs = require('fs');
var path = require("path");
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname));

app.post('/contact', function(req, res){

    var name = req.body.first;
    var email = req.body.email;
    var subject = req.body.last;
    var message = req.body.message;
    var mailOpts;

    var transporter = nodemailer.createTransport('smtps://usustudent7%40gmail.com:usustdnt7@smtp.gmail.com');

    mailOpts = {
        from: name + ' &lt;' + email + '&gt;',
        to: 'bendmack2@gmail.com',
        subject: subject,
        text: message
    };

               transporter.sendMail(mailOpts, function(error, info){
                   if(error){
                       return console.log(error);
                   }
                   console.log('Message sent: ' + info.response);
               });

});


app.get('/',function(request,res){
       
     res.sendFile(path.join(__dirname+'/views/index.html'));

});


app.listen(8080);

console.log("Running at Port 8080");



