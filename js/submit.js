var http = require("http");
var express = require("express");
var app = express();
var request = require('request')
var fs = require('fs');
var path = require("path");

function onSub()
{
	var email = document.getElementById("email").value;
	var first = document.getElementById("fName").value;
	var last = document.getElementById("lName").value;
               var message = document.getElementById("message").value;
	var at = "@"
	var com = ".com"
	if(email.indexOf(at) == -1)
	{
		alert("Must enter a valid email!");
		return;
	}
	if(email.indexOf(com) == -1)
	{
		alert("Must enter a valid email!");
		return;
	}
                   var info = {"first":first, "email":email, "last":last, "message":message};

                   $.ajax({
                       type: "POST",
                       url: "/contact",
                       data: JSON.stringify(info),
                       contentType:"application/json; charset=utf-8",
                       dataType: 'json'
                   }).done(function(retorno){
                      alert("We will get your email soon");
                   })
          
               
}

