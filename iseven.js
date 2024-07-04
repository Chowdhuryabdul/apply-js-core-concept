/* console.log(4/2);
console.log(98/2);
console.log(144/2);
console.log(1286/2); */
/* console.log(7/2);
console.log(83/2);
console.log(145/2);
console.log(1287/2); */

/* console.log(4%2);
console.log(98%2);
console.log(144%2);
console.log(1286%2); */

/* console.log(7%2);
console.log(83%2);
console.log(145%2);
console.log(1287%2); */

// if a number is divided by 2 and the remiander is 0 then it is even number ann number is devided by the 2 and remainder is 1 then it is odd number 


function isEven(number){
    const remainder = number % 2;
    
    if (remainder === 0){
        return true;
    }
    else{
        return false;
    }
}

const muNumberIsEven = isEven(303);
console.log(muNumberIsEven)
const herNumberIsEven = isEven(300)
console.log(herNumberIsEven)


function numberIsOdd(number){
    const remainder = number % 3;

    if (remainder === 1){
        return true
    }
    else{
        return false;
    }
}

const firstNumber = numberIsOdd(405);
console.log(firstNumber)
const secondNumber = numberIsOdd(400);
console.log(secondNumber)


function evenOrOdd(number){
    const remainder = number % 2;
    if (remainder === 0){
        return true
    }
    else{
        return false;
    }
}

const firstNumber = evenOrOdd(355);
console.log(firstNumber)
const secondNumber = evenOrOdd(340);
console.log(secondNumber)