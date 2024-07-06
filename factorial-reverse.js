// how to find the factorial of a number 

function factorial(number){
    let result = 1;
    for(let i = number; i >= 1; i--){  /* i have written here revers loop */
        console.log(i);
        result = result * i
    } 
    return result
}

const number = 5
const fact = factorial(number)
console.log('factorial of:', number, fact)