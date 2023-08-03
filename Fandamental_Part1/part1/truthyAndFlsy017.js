// 5 falsy value is: 0, " ", undefined, null, NaN;

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean( ));
console.log(Boolean(NaN));



let money1 = 0;
if(money1){
    console.log("Don't spend it all")
}else{
    console.log("You should get a job")
}

let money = 10;
if(money){
    console.log("Don't spend it all")
}else{
    console.log("You should get a job")
}


let height1 = 0;
if(height1){
    console.log("YAY! height is defined");
}else{
    console.log("Height id UNDEFINED")
}


let height = 123;
if(height){
    console.log("YAY! height is defined");
}else{
    console.log("Height id UNDEFINED")
}