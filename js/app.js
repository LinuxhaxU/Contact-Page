// 1) Using jquery -- create $(document).ready function

// 2) Within here put a listener on the search button -- it can be in a form or not

// 3) Get the username from the input box and put that into the gitHub api url ( https://api.github.com/users/{username} )

// 4) Use an ajax call to call to this url and get back the json data

// 5) Pull out and put the data that you need to put into the elements on your html page

var script = document.createElement('script');
script.src = 'http://code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function onSearch()
{
	
	user = document.getElementById("input");
	var address = "https://api.github.com/users/"+user.value;
	$(document).ready(function () {
	$.ajax({
      url: address,
	     complete: function(xhr) {
       if(xhr.status == 404)
	   {
		   document.getElementById("message").innerHTML = "Not Found!";
	   }
      }
	});
	
	$.getJSON(address, function(data) {
			document.getElementById("message").innerHTML = "Username: "+data.login+"<br>";
			document.getElementById("message").innerHTML += "Public Repositories: "+data.public_repos+"<br>";
			document.getElementById("message").innerHTML += "Followers: "+data.followers+"<br>";
			document.getElementById("message").innerHTML += "<image src="+data.avatar_url+">";
		});
	});
}