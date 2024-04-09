// Adding element in array
/***** Question******
 write a program that print no from 1 to 100
 but for multiple of 3 print FIZZ instead of no. and of multiple of 5 print BUZZ and for 
 both number multiple of 3 and 5 print FIZZBUZZ
*/
var output = [];
var count = 1;
function fizzbuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("fizzbuzz");
  } else if (count % 3 === 0) {
    output.push("fizz");
  } else if (count % 5 === 0) {
    output.push("buzz");
  } else {
    output.push(count);
  }
  count++;
  console.log(output);
}
