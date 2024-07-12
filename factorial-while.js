// how to do the factorial with the whiel loop 

function factorial(number){
    let num = 1;
    let result = 1;
    while(num <= number){
        result = result * num;
        num++
    }
    return result;
}
const theNumber = 11
const fact = factorial(theNumber);
console.log(fact);



