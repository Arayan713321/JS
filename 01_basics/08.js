const name='ARYAN'
const repocount=50

console.log(name+repocount+' GOOD')//outdated h to nhi use karo

console.log(`Hi I'm ${name} & my repocount is ${repocount}`);
//better way and increases readability

const gamename=new String('ARYAN KUMAR SHAW')

console.log(gamename[0]);
console.log(gamename.__proto__);//access karne ka tarrika
console.log(gamename.length);//direct access

console.log(gamename.toLowerCase());
console.log(gamename.charAt(12));//index wise batayega
console.log(gamename.indexOf('K'));

const newString = gamename.substring(0, 4)
console.log(newString);

const anotherString = gamename.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gamename.split('-'));



// METHODS IN STRING (LEARN)


let str = "Hello, world!";
console.log(str.charAt(1)); // "e"

console.log(str.charCodeAt(1)); // 101

let str2 = " How are you?";
console.log(str.concat(str2)); // "Hello, world! How are you?"


console.log(str.includes("world")); // true


console.log(str.endsWith("world!")); // true


console.log(str.indexOf("world")); // 7


let str3 = "Hello, world! Hello again!";
console.log(str3.lastIndexOf("Hello")); // 14


console.log(str.match(/world/)); // ["world"]


console.log(str.repeat(2)); // "Hello, world!Hello, world!"


console.log(str.replace("world", "JavaScript")); // "Hello, JavaScript!"


console.log(str.search(/world/)); // 7


console.log(str.slice(0, 5)); // "Hello"


console.log(str.split(", ")); // ["Hello", "world!"]


console.log(str.startsWith("Hello")); // true


console.log(str.substring(0, 5)); // "Hello"


console.log(str.toLowerCase()); // "hello, world!"


console.log(str.toUpperCase()); // "HELLO, WORLD!"


let str4 = "   Hello, world!   ";
console.log(str4.trim()); // "Hello, world!"

console.log(str4.trimStart()); // "Hello, world!   "


console.log(str4.trimEnd()); // "   Hello, world!"


let strObj = new String("Hello, world!");
console.log(strObj.valueOf()); // "Hello, world!"

