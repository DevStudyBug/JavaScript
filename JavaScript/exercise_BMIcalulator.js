function bmiCalculator (weight, height) {
    BMI = weight/ (height* height);
    if (BMI <= 18.5){
        console.log("Your BMI is " + BMI + ", so you are underweight")
    }
    else if (BMI > 18.5 && BMI <= 24.9 ){
        console.log("Your BMI is " + BMI + ", so you are normal weight")
        
         }
    else
         {
             console.log("Your BMI is " + BMI + ", so you are over weight")
         }
    return Math.round(BMI);
}
var interpretation  = bmiCalculator (142,2)
console.log( interpretation)

/**function bmicalculator(weight,height){
    var bmi= weight/(height*height);
    console.log(Math.round(bmi));
}
bmicalculator(42,3) */