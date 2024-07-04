// decalration vs definaiton of function 
// delaration and defination of function is basically same thing.

// parameter vs argument

// function printMe(parameter){
//     console.log('trust me')
// }
// printMe('argument')

// define function with the Expression

// var printMe = function(a, b){
//     console.log(a, b)
// }

// printMe(10, 20)



// function total(result1, result2){
//     var sum = result1 + result2;
//     return sum;
// }

// const result1 = 10;
// const result2 = 20;
// var totalSum = total(result1, result2)
// console.log(totalSum)

function calc(a, b){
    return (2 * (a + b))
}

// calc(2, 3)

// if there is only one value is given 
calc(2)

// Default parameter---
// in case of undefined valye we can use the defalut value--

function calc(a, b=0){
    return (2 * (a + b))
}

calc(3)

// rest parameter-- rest parameter is something that allows a function to accept any number of arguments as an array.
// function can contain only one rest parameter(three dots ... and what ever i set). and the rest parameter will be the last parameter which is defined for the function.

/* function collectThings(x, ...y){
    console.log(x);
    console.log(y);
}

collectThings(1,2,3,4,5,6,7,8,9)
console.log(collectThings) */

// Arrow function 
