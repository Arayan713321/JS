const score = 400//undefined
console.log(score);


const balance = new Number(600)//number type
console.log(balance);

console.log(balance.toString().length);//string m convert karke length batayega
console.log(balance.toFixed(3));//decimal ke baad 3 digit

const newnumber =123.500
console.log(newnumber.toPrecision(3));//number whole kar dega

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));



console.log(Math);

console.log(Math.abs(-199));  //199

console.log(Math.round(12.09));  //12

console.log(Math.ceil(4.1));  //5

console.log(Math.floor(4.9));   //4

console.log(Math.min(4,3,5,7,8,));  //min value

console.log(Math.max(4,12,3,45,676,87,90,1,3,5,7,678,675));  //max value

console.log(Math.random());  //random values between 0 & 1

console.log((Math.random()*10)+1);

console.log((Math.floor(Math.random()*10)+1));  //single value


const min = 10
const max = 20
Math.random
console.log(Math.floor(Math.random() * (max - min + 1))+min);
