import express from "express";

const app = express();
const port = 3001;

function logger(req,res,next){
  console.log("request method:", req.method);
  console.log("request URL:", req.url);
  next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/**1- run index3.js with nodemon 
2- create your own function called logger (req, res,next ).
3- inside your function console.log ()the request method and request URL 
4- remember to call next().URL
5 - mount your middleware function  using the express .use( ) method
6- test the logger on localhost and with postman**/