function whosPaying(names) {
  var numberofpeople = names.length;
  var randomPersonPosition = Math.floor(Math.random() * numberofpeople);
  var randomPerson = names[randomPersonPosition];
  return randomPerson + " is going to buy lunch today! ";
}
var Narray = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
console.log(whosPaying(Narray));
