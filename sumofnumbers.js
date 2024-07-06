// want to do the sum of -- 1 + 2 + 3 + 4 + 5 + 6 + 7
let sum = 0;
for(let i = 1; i <= 7; i++){
    sum = sum + i
    console.log(i, sum)
}

function sumOfNumbers(numbers){
    let sum = 0;
    for(let i = 1; i <= numbers.length; i++){
        sum = sum + i
        // console.log(i, sum)
    }
}

const number = 7
const total = sumOfNumbers(number);
// console.log('show sum', total)