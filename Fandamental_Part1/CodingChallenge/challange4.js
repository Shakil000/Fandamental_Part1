billValue = 275;
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;

console.log(`The bill was ${billValue} the tip was ${tip} and total is ${billValue + tip}`);


// billValue = 275;
// firstTipValue = 15/100;
// secondTipValue = 20/100;
// const tip = billValue >= 50 && billValue <= 300 ? billValue * firstTipValue : billValue * secondTipValue;

// console.log(`The bill was ${billValue} the tip was ${tip} and total is ${billValue + tip}`);


// billValue = 430;
// firstTipValue = 15/100;
// secondTipValue = 20/100;
// if(billValue <= 50 && billValue >= 300){
//     console.log(`The bill was ${billValue} the tip was ${firstTipValue * billValue} and total is ${billValue + (firstTipValue * billValue)}`);
// }else{
//     console.log(`The bill was ${billValue} the tip was ${secondTipValue * billValue} and total is ${billValue + (secondTipValue * billValue)}`);
// }

//console.log(`The bill was ${billValue} the tip was ${tip} and total is ${billValue + tip}`);


