function factorial (number){
    let i = number;
    let result = 1;
    while( i >= 1){
        i--;
        result = result * i;
        console.log(result)
    }
    return result;
}

const theNumber = 7
const factorialNumber = factorial(theNumber)
console.log('show the revers factorial of 7:', factorialNumber)