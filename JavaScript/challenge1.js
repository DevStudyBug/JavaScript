// by using random number generator create a love calculator 
//take two inputs using prompt and generate result using alert
const prompt = require("prompt-sync")()  // npm install prompy-sync
prompt("Enter your name: ");
prompt("Enter your crush name: ");
var loveScore = Math.random()*100;
loveScore= Math.floor(loveScore) + 1;
if (loveScore > 70){
    alert("your love score is "+ loveScore+" % and you love each other like kanye and kanye");

}else{
alert("your love score is "+ loveScore+" %");
}
