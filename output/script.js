const fullName = 'anik sarker';
const myFunc = () => {
    console.log('hello there');
};
const sum = (a, b) => {
    return a + b;
};
console.log(sum(1, 2));
// array
const fruits = ['apple', 'banana', 'orange'];
fruits.push('pineapple');
// type alias
const userDetails = (id, fullName) => {
    console.log(`Your id is ${id}, and you name is ${fullName}`);
};
const userObjDetails = (id, user) => {
    console.log(`Your id is ${id}, you name is ${user.name} and you city is ${user.city}`);
};
userObjDetails(1, { name: 'anik', city: 'rajbari' });
// array type
const array = [];
array.push(3);
// object type
let obj;
obj = {
    name: 'anik sarker',
};
// Function type
let sumFunc;
sumFunc = (a, b) => {
    return a + b;
};
// Function Signature
let sayHello;
sayHello = (name) => {
    return `Your name is ${name}`;
};
export {};
