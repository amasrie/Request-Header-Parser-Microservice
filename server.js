var express = require('express');
var app = express();


app.get('/', function(req, res){
	var ip = req.headers['x-forwarded-for'].split(",");
	if (ip[0].substr(0, 7) == "::ffff:") {
	  ip = ip[0].substr(7);
	}else{
	  ip = ip[0];
	}
	var lang =  req.headers["accept-language"].split(",");
	var sw = req.headers['user-agent'].split(")");
	sw = sw[0].split("(");
    res.send({"ipaddress": ip, "language": lang[0], "software": sw[1]});
});


// listen for requests :)
var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
