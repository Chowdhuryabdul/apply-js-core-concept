/* --> to convert the decimal number into integar-- */

// var x = 25.4565;
/* var y = parseInt(x) --->this is one way
console.log(y) */
// console.log(parseInt(x)) /* -->this is another way  */

/* --> to know the type of variable */

// var num = 'robiul'
// console.log(typeof num);

/* --> to covert a string to a number  */

// var number = '23.78'
// console.log(parseFloat (number));

/* --> to fix the number of number after decimal */

// var number1 = 65.88888
// console.log(number1.toFixed(2), typeof number1)  /* -- to fix convert number to string */
// console.log(parseFloat(number1));


/* --> post increment and pre-increamnet. the difference is post increament add the number later and pre increamnent is reverse  */

/* var x = 5;
console.log(x++)
console.log(++x) */


/* Array-- */


/* var arr = [12, 13, 14, 15]

console.log(arr[3])


var totalPlayer = 12;

if(totalPlayer <= 10){
    console.log('we can not play')
}

else if(totalPlayer >= 12){
    console.log('we need to big field');
}

else if(totalPlayer === 12){
    console.log('we will play in the same field')
}

else{
    console.log('we will not play today')
}


var saySorry = 0;
while(saySorry <=10){
    console.log('i am sorry', saySorry)
    saySorry++
}

for(var saySorry = 0; saySorry <=10; saySorry++){
    console.log('u need to tell me sorry')
} */



var numbers = [10, 20, 30, 40, 50]
/* console.log(numbers.indexOf(40)) */

/* for(i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    // console.log(numbers[i]) or i can do this way to find the value of the array
} */


/* var x = 0;
while(x < numbers.length){
    // console.log(numbers[x])
    x++
} */




/* var items = [12, 13, 14, 15, 16, 17, 18, 19, 20]

for (var i = 0; i < items.length; i++){
    var number = items[i]
    console.log(number)
    if(number > 14){
        continue
    }
} */

/* for(var i = 0; i < items.length; i++){
    console.log(items[i])
    if(items[i] == 17){
        break
    }
    
} */



// break loop 

/* for(var i = 0; i < 100; i++ ){
    console.log(i)
    if(i >= 30){
        break
    }
} */



/* 	var numbers = [12, 14, 50, 111, 30, 35, 50]
	for(var i = 0; i < numbers.length; i++){
	    var number = numbers[i];
	    if(number > 100 ){
	        continue;
	    }
	    console.log(number)
    } */



var x = 5;
if(x == 5){ /* here double equal sign means that it will onnly check the value, not string or others */
    // console.log('it is true')
}
else{
    console.log('it is not true')
}


var y = '6';
if(y === '6'){ /* in case of triple === equal it will check string and value both  */
    // console.log('equal to 6')
}
else{
    console.log('not equal to 6')
}


// Multiple condition 

var raining = true;
var unbrela = true;

if (raining == true && unbrela == true){ /* && it means both conditon has to be fullfill  */
    // console.log('i will go outside')
}
else{
    console.log('will not go')
}

var raining = false
var umbrela = true;

if(raining == true || umbrela == false){ /* || it means one of them nust be true */
    // console.log('go outside')
}
else{
    console.log('will not go')
}


// remainder---

var x = 20
var y = 3

var remainder = x % y;
// console.log(remainder)

// if the modulus number is smaller than the number will use to do moduls that the samll number will show as same 

var a = 6
var b = 10

var totalremainder = a % b;
// console.log(totalremainder)

// ternary operator--- it is used to wirte the same thing as conditontional if or else but in a different way

var reining = true;
if(raining == true){
    console.log('baire jabo na');
}
else{
    console.log('tahole baire jabo')
}

// this whole conditon is written in ternary operator

reining == false ? console.log('ami baire jabo na') : console.log('otherwise baire jabo')


// How to tuse ternary in the Nested Condition 

var age = 25;
var hasLicense = true;

if(age >= 18){
    if(hasLicense == false){
        console.log('i am adult')
    }else{
        console.log('am adult but without license')
    }
}
else{
    console.log('i am not adult')
}

age >= 18 ? hasLicense == false? console.log('i am adult') :  console.log('am adult but without license')  : console.log('i am not adult') 