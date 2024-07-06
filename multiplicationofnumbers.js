
function multipleOfNumbers(number){
    let multiplicationResult = 1; /* in the nultiplication i need to start from 1 */
    for(let i = 1; i <= number; i++){
        multiplicationResult = multiplicationResult * i;
    }
    return multiplicationResult
}

const multipliedNumber = multipleOfNumbers(9);
console.log(multipliedNumber)