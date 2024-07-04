function mileToKilometer (mile){
    const km = mile * 1.2
    return km
}

const traveld = 144;
const traveldKm = mileToKilometer(traveld)
console.log('he has traveld this much:', traveld)

function inchesToCentimeter(inche){
    const centimeter = inche * 2.54;
    return centimeter
}

const skapHeight = 140;
const totalCentimeter = inchesToCentimeter(140);
console.log(totalCentimeter )

function kgToLiter(kg){
    const liter = kg * 1.13;
    return liter
}

const oilShopped = 140;
const totalShoppedLiter = kgToLiter(140);
console.log(totalShoppedLiter)