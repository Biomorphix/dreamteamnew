var express = require('express');
var app = express();
var path = require('path');


app.use(express.static('public'));

app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});




app.listen(1337, function () {
    console.log('Example app listening on port 1337!')
})

