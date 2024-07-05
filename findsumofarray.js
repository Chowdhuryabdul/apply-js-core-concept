// to get the sum of an array in the function 

function getSumOfAnArray(numbers){
    let sum = 0  /* we need to write it for the sum option and have to write outside of the for loop */ 
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        // get all the element of an index need to write like this 
        const element = numbers[index];
        sum = sum + element; /* here i need to add the sum option  */
        console.log(index, element, sum);
    }
    return sum /* i also need to write the return outside of the for loop  */

}

const myNumbers = [12, 14, 15, 16, 17, 19, 20]
const myArray = getSumOfAnArray(myNumbers)
console.log(myArray)


/* function getTotal(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        const index = i
        const element = numbers[index]
        sum = sum + element
        console.log(index, element, sum)
        
    }
}

const myArrayNumbers = [10, 20, 30, 40, 50, 60]
const sumOfMyArrayNumbers = getTotal(myArrayNumbers)
console.log(sumOfMyArrayNumbers) */


function getAggregateOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum);
    }
    return sum;
}

const theNumbersArray = [12, 13, 14, 15, 16, 17];
const theSumOfArray = getAggregateOfArray(theNumbersArray)
console.log(theSumOfArray)