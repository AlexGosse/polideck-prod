'use strict';

const express = require('express');
var bodyParser = require('body-parser');
var path = require("path");

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/index.html'));
});

app.get('/fileupload', (req, res) => {
  res.sendFile(path.join(__dirname,'./public/fileupload.html'));
});

app.post('/add', function(req,res){
  res.send("Received document named " + req.body.filename);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
