function getSumOfArray(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
            const index = i;
            const element = numbers[index];
            sum = sum + element;
            // console.log(index, element, sum)   
    }
    return sum
}

function getSumOfOddNumber(numbers){
    let oddNumber = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index]
        if(element % 2 !==0){
            console.log(index, element)
            oddNumber.push(element)
        }
        
    }
    return oddNumber;
}

const myNumbers = [12, 13, 14, 15, 16, 17, 18, 19]
const oddNumber = getSumOfOddNumber(myNumbers);
const sumOfOdd = getSumOfArray(oddNumber);
console.log('want see the odd numbers adn the total:', oddNumber, sumOfOdd)
getSumOfArray(myNumbers)