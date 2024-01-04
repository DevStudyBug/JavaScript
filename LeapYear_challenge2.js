/**************question****************/ 
/*Leap Year Challenge Exercise
💪This is a Difficult Challenge 💪
check if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.*/
function isLeap(year) {
    if (year%4===0){
        if(year%100===0){
           if(year%400===0){
               return " Leap." ;
           }else
           {
                return "Not Leap.";
           }
        }else{
                return " Leap.";
        }
        
    }else{
          return" Not Leap";
    }
    }
    isLeap(2000);
    /*e.g. Is the year 2000 a leap year?:
    2000 ÷ 4 = 500 (Leap)
    2000 ÷ 100 = 20 (Not Leap)
    2000 ÷ 400 = 5 (Leap!)
    so the year 2000 is a leap year.*/
    