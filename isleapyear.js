// Normal version 
/* function isLeapYear(year){
    const remainder = year % 4;
    
    if(remainder === 0){
        // console.log('your year is leap year', year)
        return true;
}
else{
    // console.log('the year will not be be leap year',year)
    return false;
}
} */

// shorter version 

function isLeapYear(year){
    const remainder = year % 4;
    
    if(remainder === 0){
        // console.log('your year is leap year', year)
        return true;
}
    // console.log('the year will not be be leap year',year)
    return false;

}

// here i have erase the else because it also works without else

// const myFirstYear = isLeapYear(2025);
// console.log( 'is your year:', myFirstYear)
// const mySecondyear = isLeapYear(2045);
// console.log( 'is her year:', mySecondyear)
// const myThirdYear = isLeapYear(2080);
// console.log( 'is my year:', myThirdYear)


function leapYear(year){

    
    if(year % 4 === 0){
        return false
    } else if(year % 100 === 0){
        return true
    }
    else if(year % 400 === 0){
        return false;
    }
    else{
        return true;
    }   
}

const myFirstYear = leapYear(2023);
console.log('my year will be leap year', year)
const herSecondeYear = leapYear(2034);
console.log('her year will be the leap year', year)
const yourThirdYear = leapYear(2056);
console.log('you year will be leap year', year)


 // Define a function to check if a given year is a leap year
 function leapyear(year) {
    // Return true if the year is divisible by 4 but not divisible by 100 unless it's also divisible by 400
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

// Test the function with various years and log the results to the console
console.log(leapyear(2016)); // Expected output: true
console.log(leapyear(2000)); // Expected output: true
console.log(leapyear(1700)); // Expected output: false
console.log(leapyear(1800)); // Expected output: false
console.log(leapyear(100));  // Expected output: false


console.log(2000%4)
console.log(2000%400)
console.log(2000%100)

console.log(2016%4)
console.log(2016%400)
console.log(2016%100)


function myLeap(year){
    if(year%4===0){
        if(year%100===0){
            if(year%400===0){
                return 'leap year'
            }
            else{
                return 'it is not leap year'
            }
        }
        else{
            return 'it is leap year'
        }
    }
    else{
        return 'it is not leap year'
    }
}

const firstYear = myLeap(2024);
console.log(firstYear)



https://www.youtube.com/watch?v=xGC5DaY_TSE&ab_channel=PixelPeeps

