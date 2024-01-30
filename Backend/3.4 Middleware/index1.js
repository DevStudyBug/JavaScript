import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.sendFile( res.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// USE THIS 1- npm install  (it install node_modules file)
//2-  npm -g nodemon
//3 -  nodemon index.js

/** 1 use npm to install body parser module
2 run index 1.js with nodemon
3 import the body-parser modulemount the middleware using the express .use() method 
4 specify the urlencoded ({ extended: true}) to create a body for URL-encoded request like our form submission.
5 write a .post ("/submit") handler where you console.log ()the form content when the user click the submit button */
