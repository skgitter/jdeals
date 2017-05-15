// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public/');
app.engine('html', require('ejs').renderFile);

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//app.register(".mustache", require('stache'));

//app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
  res.render("index.html");
});

app.get('/claim', (req, res) => {
  res.render("contact_us.html");
});

if (module === require.main) {
  const server = app.listen(process.env.PORT || 8081, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}

module.exports = app;
