let balance=120 
let anotherbalance = new Number(140)

console.log(typeof balance);
console.log(typeof anotherbalance);

console.log()
//boolean 
let isActive=true;
isReallyActive = new Boolean(true);
console.log(typeof isActive);
console.log(typeof isReallyActive);

console.log();

// null and undefined
let firstname;
console.log(firstname);
let middleName=null;
console.log(middleName);
let Lastname=undefined;
console.log(Lastname);

console.log()
//String
let myString="Hello";
let myStringOne='Hello';
let user_name='hitesh';
let greetMessage=`hello ${user_name} !`;
console.log(greetMessage);

let demoOne = `value is ${2*2}`
console.log(demoOne);


let oldGreetMessage = myString + " " + "Hitesh"
console.log(oldGreetMessage);

console.log();
//Symbol
let sm1 = Symbol("hitesh");
let sm2 = Symbol("hitesh");
console.log(sm1 == sm2);


