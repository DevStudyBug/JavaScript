// Lyrics of the song 99 Bottles of Beer
function bottel99(){
    var i=99;
    var j= i-1;
    while(i>0){
        if(i===1){
             var j = "no more";
        }
        console.log(i +" bottles of beer on the wall,"+ i +" bottles of beer. Take one down and pass it around,"+ j +" bottles of beer on the wall.")
    i--;
    j--;
   
}
    console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall")
   

    
}
// another solution
// var numberOfBottles = 99;
// while (numberOfBottles >= 0) {
//     var bottleWord = "bottle";
//     if (numberOfBottles === 1) {
//         bottleWord = "bottles";
//     } 
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
//     console.log(numberOfBottles + " " + bottleWord + " of beer,");
//     console.log("Take one down, pass it around,");
// 	numberOfBottles--;
//     console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
// }