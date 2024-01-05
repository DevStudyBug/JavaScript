//ontrole staement --------while loop----------
/**syntax
while (something is true){
// do something
}
example:
var i=1;               //initialization
while(i<5){            //condition
    console.log(i);   
    i++                //increment
}
**/

//fizzbuzz challenge -using control statement--------------
var output =[] ;
var count =1;
function fizzbuzz(){
    while(count<=100){
    if (count%3===0 && count%5===0)
    {
        output.push("fizzbuzz");
       
    }
    else if (count%3===0){
         output.push("fizz");
    }
    else if(count%5===0){
         output.push("buzz");
    }
    else{
         output.push(count);  
    } 
   count++;
}
   console.log(output);
}

// Controle statement ---- FOR LOOP----------------------/
/****** for loop is used for irerate(how many times) and while loop is used when condition is true
 syntax 
      start   end    change
        |      |        |
 for ( i=0 ;   i<10 ; i++  ){
    // satement
 }
 Example
 for(var i=0 ;   i<10 ; i++ ){
    console.log(i);
 }
 
 ********/
 var output =[] ;
 var count =1;
 function fizzbuzz(){
     for( var count =100;count>1; count-- ){
     if (count%3===0 && count%5===0)
     {
         output.push("fizzbuzz");
        
     }
     else if (count%3===0){
          output.push("fizz");
     }
     else if(count%5===0){
          output.push("buzz");
     }
     else{
          output.push(count);  
     } 
 }
    console.log(output);
 }