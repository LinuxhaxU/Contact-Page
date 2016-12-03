// 1) Require http
var http = require("http");
var express = require("express");
var app = express();
const request = require('request')

// 2) Connect to the API URL ( https://api.github.com/users/{username} )
function findUserData(user)
{
    console.log(user);
    var address = "https://api.github.com/users/"+user;
    request({url: address, headers: {'user-agent': 'node.js'}}, 
    function(error, response, body, headers){
                 if (!error && response.statusCode == 200) {
                   const jsn = JSON.parse(body)
                   printToConsole(jsn);
                 } else {
                   if(response.statusCode == 404)
                   {
                   console.log("User not found try retyping the username.");
                   }
                 }
    });
}
//exports.findUserData = findUserData;

// 3) Print out data if user is found
        // a) profile image
        // b) username
        // c) public repo count
        // d) followers count
function printToConsole(jsn)
{
      console.log("Login: "+jsn.login);
      console.log("Avatar: "+jsn.avatar_url);
      console.log("Repos: "+jsn.public_repos);
      console.log("Followers: "+jsn.followers);
}
       
// 4) Output the Error if user is not found

