import  express from "express";
const app = express();
const port = 3000;

app.get("/",(req, res)=> {
res.send("hello server ");
});

app.listen(port , ()=>{
    console.log(`server running on port ${port}`)

});

/* 1- create directory  { mkdir "3.1 Express server" }
 2- create file       { touch index.js or use New-Item -ItemType File -Name "index.js" }
 3-initialize npm { npm init -y}
 4- install the express package{ npm i exress}
 5-write server application in index.js
 6- start server { node your_app.js (example node index.js)}
 TO RUN IN TERMINAL USE node index.js*/
    
// Displays protocol statistics and current TCP/IP network connections.
//netstat -ano  Findstr "LISTENING"   or netstat -ano | Select-String "LISTENING"