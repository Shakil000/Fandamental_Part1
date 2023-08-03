///Data 1

// let markMass =78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95

// const BMIMark = markMass / markHeight ** 2;
// const BMIJohn = johnMass / (johnHeight * johnHeight)
// const markHigherBMI = BMIMark > BMIJohn;
// console.log(BMIMark , BMIJohn , markHigherBMI);



/// Data-2

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;
if(BMIJohn > BMIMark){
    console.log(`John BMI' + ${BMIJohn} 'is higher then 'Marks BMI' + ${BMIMark}`);
}else{
    console.log("your input calculation is wrong")
}
//console.log(BMIMark, BMIJohn, markHigherBMI);


