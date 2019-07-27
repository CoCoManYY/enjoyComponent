const path = require("path");
const express = require("express");
const app = express();

// 设置cors
var allowCrossDomain=function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');//自定义中间件，设置跨域需要的响应头。
    next();
}

app.use(allowCrossDomain);//运用跨域的中间件

app.get("/", function(req, res) {
    res.json({'dsds':'sdsd'});
  });

app.post("/", function(req, res) {
  res.json({'dsds':'sdsd'});
});
app.listen("8888", "localhost", function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Listening at http://localhost:8888");
});
