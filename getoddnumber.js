function getOddNumberOfAnArray(numbers){
    const oddNumbers = []
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
       /*  to get the even number */
       /* if(element % 2 ===0){
        console.log(index, element); 
       } */
       /* to get the odd number */
       if/* (element % 2 !==0) -- we can wrtie in another way */
      (element % 2 ===1) {
        console.log(index, element); 
        oddNumbers.push(element);
       }     
    }
    return oddNumbers;
    
}


function getSumOfAnArray(numbers){
    let sum = 0
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index, element, sum)
    }
    return sum;
}


const arrayNumber = [12, 13, 14, 15, 16, 17, 19, 21, 23, 24, 28];
const oddNumbers = getOddNumberOfAnArray(arrayNumber);
console.log(oddNumbers);

const sumOfOddNumbers = getSumOfAnArray(oddNumbers)
console.log('sum of odd number:', sumOfOddNumbers)

