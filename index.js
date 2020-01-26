var express = require("express");
var request = require("request");

var app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("search");
});

app.get("/results", function(req, res) {

    var query = req.query.search;
    var url = "http://www.omdbapi.com/?apikey=[2e904546]&s=" + query;
    request("url", function (error, response, body) {
        if (!error && response.statusCode == 200)
            var results = JSON.parse(body);
           console.log(body);
        res.render("results", {results: results});
    });
});
    app.listen(9000, function(){
        console.log("Server has started");
    });

