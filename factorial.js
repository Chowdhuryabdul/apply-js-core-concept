
function factorial(number){
    let multiplicationResult = 1; /* in the nultiplication i need to start from 1 */
    for(let i = 1; i <= number; i++){  /* i need to wirte here 'number' instead of digit so if ii change any number it will bu autometicallcy updated otherwise if i set one number such 7 it will run til 7 than will be stopped but in case number it will be updated with the change.  */
        multiplicationResult = multiplicationResult * i;
    }
    return multiplicationResult
}

const multipliedNumber = factorial(9);
console.log(multipliedNumber)