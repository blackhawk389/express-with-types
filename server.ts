
/// <reference types="@types/express" />

import * as express from "express";
var app = express();

console.log(app);

app.get('/', function (req, res) {
  res.send('Hello World!')
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})











