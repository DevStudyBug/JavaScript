// Random Number generation ( calculation)
// this function generate a 16 Decimal places no. example 0 - 0.3647254465987456

var n = Math.random();
n= Math.floor(n*6) + 1; // for dice  n*6 give number in range between 0-5.9999999999999.... hence add +1 
console.log(n);

