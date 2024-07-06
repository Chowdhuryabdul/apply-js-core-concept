function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
    return sum
}


function getSumOfOddNumberOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0) {
            /* console.log(index, element) */
            oddNumbers.push(element)
        }
    }
    return oddNumbers
}

const array = [12, 13, 14, 15, 16, 17, 18, 19, 20]
const sumofArrayNumber = getSumOfAnArray(array)
console.log('get the sum of this array:', sumofArrayNumber)

const oddNumbers = getSumOfOddNumberOfAnArray(array)
const sumOdd = getSumOfAnArray(oddNumbers)
console.log('get the sum of odd number:', oddNumbers, sumOdd)



function arrayItems(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum )
    }
    return sum
}


function findSumOfOddNumbers(numbers){
    let findOddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !==0){
            // console.log(index, element)
            findOddNumbers.push(element)
        }
    }
    return findOddNumbers
    
}

const theNumbers = [10, 15, 20, 25, 30, 35, 40, 45, 46 , 37, 50];
const sumOfTheNumbers = arrayItems(theNumbers);
console.log('show the sum of the array:', sumOfTheNumbers)

const findOddNumbers = findSumOfOddNumbers(theNumbers);
const findTheOddNumbers = arrayItems(findOddNumbers);
console.log(findTheOddNumbers);