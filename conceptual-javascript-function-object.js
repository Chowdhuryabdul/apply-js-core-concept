/* if i want find a sub-string (part of a word) in a string-- */

const name = 'quaiyum'
const subString = name.includes('li');
// console.log(subString)

// to find a element in array 

const pets = ['dog', 'cow', 'cat', 'goat', 'roast', 'others']
const findElement = pets.includes('horse')
// console.log(findElement)
// console.log(pets)

// use of slice and splice
const petsName = ['dog', 'cow', 'cat', 'goat', 'roast', 'others']
// const cut = pets.slice( 3)
const cut = petsName.slice(2,4)
// console.log(cut)

const result = petsName.splice(2,1); /* this 2 means it will come 2 number element and 1 means will delete only one element. so first number work for the index of element and second digit works for how many element you wont to splice. here 1 means only one elemnt will by spliced */
// console.log(result)
// console.log(petsName)

/* use splice to add new element */

petsName.splice(2, 0, 'rat') /* here are three parameter-first parameter (2) -->startindex, second parameter(0)--> to delet existing one, and third paramter(rat)-->the one i want to add. if i want to add more i need to use koma.  */
// console.log(petsName)

// use splice to delet existing one and add new one 

petsName.splice(2, 1, 'hen') /* here are three parameter-first parameter (2) -->startindex, second parameter(1)--> to delet existing one, and third paramter(hen)-->the one i want to add. if i want to add more i need to use koma.  */
// console.log(petsName);


// OBJECT 

const person = {
    name: 'joglu',
    age: 25,
    address: 'rajsahi',
    phone: '12345678'
}
// console.log(person)

/* want to see one particular object-
1. can be seen dot Notation 
2. can be seen by bracket notation 
3. i can see through keeping it inside a varaible */

// console.log(person. age);
// console.log(person['phone']);
const x = 'address' /* i can keep it inside a variable */
// console.log(person[x]);

// if i want to get all the keys in a object 

const keys = Object.keys(person);
// console.log(keys);

// if i want to get only the values of the object

const values = Object.values(person)
// console.log(values)

// if i need to access the value through using the keys in a object 
for (let key of keys){
    // console.log(person[key])     /* i can write for of....loop like this */
}
for(let i = 0; i < keys.length; i++){
    const key = keys[i];
    // console.log(person[key])  /* i can wrtie key inside the variable */
    // console.log(person[keys[i]])  /* i can wrtie it directly */
}

// to access the property value by property name, i will use for...in loop here 

for(let i in person){
    // console.log(i)
    // console.log(person[i])  /* if i want to see the value then i do this */
}


/* function */

function printInfo(name){
    // console.log('valo how jaw', name)
}

const a = 'masud' /* --> to declare argument through a variable */
printInfo(a)


/*  use of return function  */

function add(x, y){
    let total = x + y;
    return total
}
// console.log(add())

// how to find the sum of array through function 

function sumOfArray(arr){
    let sum = 0
    for(let item of arr){
        // sum = sum + item -- both are same this one and down one
        sum += item
    }
   /*  for(let i = 0; i < arr.length; i++){ there are two types of for loop
            sum = sum + arr[i]
        }
    return sum */

}

const numbers = [1, 2, 3, 4, 5, 6, 10]
const resultOfArray = sumOfArray(numbers)
// console.log(resultOfArray)


/* how to show the sum of odd number through function from a array */

function summOfOddNumberInArray(arr){
    let sum = 0;
    for(let item of arr){
        if/* (item%2 == 1) this is for the odd number and the next one is for the even number */(item%2 ==0){
        sum = sum + item
        }
    }
    return sum
}

const arrayItems = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const total = summOfOddNumberInArray(arrayItems)
// console.log(total)

/* need to find the sum of both the odd and even numbers through function from array  */

/* function sumOfOddAndEvenNumberArray(arr){
    let sum = 0;
    for(let item of arr){
        if(){

        }
    }

}

const theArray = [12, 13, 14, 15, 16, 17, 18, 19, 20]
sumOfOddAndEvenNumberArray(theArray); */

/* ---->>>will make a sentence by thaking information from object through function-- it will returen this sentence\string- 'my name abdul, my age 35, my home chandpur'*/

function information(info){
    const sentence = 'my name '  +info.Name+', my age '  +info.age+', my home '  +info.address
    return sentence
}
const myInformation = {
 Name: 'Abdul',
 age: 35,
 address: 'chandpur'
}
// console.log (information(myInformation))


// FACTORIAL

// 5! = 5*4*3*2*1
// 1! = 1 /* 1 and 0 factorial value will be 1 */
// 0! = 1

// -----> to find the factorial of a number by loop

/* const number = 5;
let multiple = 1;

for(let i = number; i >= 1; i-- ){
    multiple = multiple * i;
}
console.log(multiple); */


const numbreWantToFactorial = 6;
let multiplicationNumber = 1;

for(let i = numbreWantToFactorial; i >= 1; i--){
    multiplicationNumber = multiplicationNumber * i;
}
// console.log(multiplicationNumber)

/*  how to do a factiorial through function  */

function factorial(number){
    if(number == 0 || number == 1){
        return 1
    }

    let result = 1;
    for(let i = number; i >= 1; i--){
        result = result * i;
    }
    return result
}

// console.log(factorial(5))
// console.log(factorial(1))


function factorialNumber(number){
    if(number === 0 || number === 1){
        return 1
    }
    let theNumber = 1;
    for(let i = number; i >= 1; i--){
        theNumber = theNumber * i;
    }
    return theNumber
}

// console.log(factorialNumber(6))

/* find the largest number from an array  */

function findLargetst(x){
 let largest = x[0]; /* i consider the first number is the largest number here. here 0(12) is the index of the first number of the array */
 for(let i = 1; i<x.length;i++){
    const currentItem = x[i];
    if(currentItem > largest){ /* here i am saying that if the currentItem is greater than largest item them currentItem will be that number */
        largest = currentItem;
    }
 }
 return largest
}
const arr = [12, 30, 56, 76, 8, 10, 49];
const largestNumber = findLargetst(arr)
// console.log(largestNumber)


function findTheBiggestFriend(friends){
    let biggest =[0];
    for(let i = 1; i < friends.length; i++){
        if(friends[i].length > biggest.length){
            biggest = friends[i]
        }
    }
    return biggest
}

const friendArr = ['arif', 'sakina', 'maryam', 'abdullah', 'nubaid', 'nihan'];
// console.log(findTheBiggestFriend(friendArr))


// validation -- if i write string in place of number or others in the same way then i can use condiiton and tell what to do

function add (a, b){
   if(typeof a !== 'number' || typeof b !== 'number'){
    return 'please give me two numbers'
   }
        return a+b;
}

// console.log(add(3, 9))

function findSumArray(arr){
    
    /* there is a function to check array is array, which is (Array.isArray), this function will return true or false   ! it means not */
    if(!Array.isArray(arr)){
        return 'pls provide me an array'
    }
    let sum = 0;
    for(let i of arr){
        sum += i
    }
    return sum
}

const theArray = [1, 2, 3, 4, 5]
// const theSum  = findSumArray('theArray') it will give me that sentence 'pls provide me an array' if i do not send array 
const theSum = findSumArray(theArray)
// console.log(theSum)

/* How to find the number of vowels and consonents in a string */

function findVowelConsonentSpace(s){

//  this is the validation part 
    if(typeof s !== 'string'){  /* here is the validation */
        return 'pls give a string'
    }

    let vowel = 0;
    let consonent = 0;
    let space = 0;
    /* if want to keep vowel in the array */
    let vowelArray = []

    
    for(let i = 0; i < s.length; i++){
        
        const char = s[i].toLowerCase();  /*  i will make this small letter whatever capital or small letter come it will transform into small .toLowerCase() */
        if(char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ){
            vowel++
            vowelArray.push(char)
        }
        else if(char !== ' '){ /* if it is not empty space then it will be consonent */
            consonent++
        }
        else{
            space++
        }
    }
    /* if i want send the return as object */
    const obj ={
        vowleCount: vowel,
        consonentCount: consonent,
        spaceCount: space,
        vowelArray: vowelArray
    }
    return obj;
}


const sentence = 'the Name of Our country is Bangladesh';
console.log(findVowelConsonentSpace(sentence));



