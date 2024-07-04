// const myInches = 12;
// const myFeet = myInches / 12;
// console.log(myFeet)

// const dadaInches = 144;
// const dadaFeet = dadaInches / 12;
// console.log(dadaFeet)

// const dadiInches = 60;
// const dadiFeet = dadiInches / 12
// console.log(dadiFeet)

// if i want to do it with the function. one of the postive side is to do with the function, is to reduce the repitition. also if i want to change something here i need to change everywhere while in the function, i just need to change in one place

// whatever vlaue i need in the function i will take those value as input parameter in the most of the cases 


function incehToFeet(inches){
    var convertFeet = inches / 12;
    return convertFeet;
}

const dadaInches = 144;
const dadaFeet = incehToFeet(dadaInches);
console.log('dadaFeet', dadaFeet)

const dadiInches = 60;
const dadiFeet = incehToFeet(dadiInches);
console.log(dadiFeet)







