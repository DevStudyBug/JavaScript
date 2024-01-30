import express from "express";
import morgan from "morgan";
const app = express();
const port = 3001;

app.use(morgan ("combine"));

app.get("/", ( req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//EXERCISE
// 1- use npm to install the morgan package 
//2- run index2.js with nodemon 
//3- import  the morgon module
// 4- mount the middleare using the express .use()method
//5- test the logging on localhost and with postman