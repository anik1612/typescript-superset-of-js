import { userType } from './type.js';

const fullName = 'anik sarker';

const myFunc = () => {
	console.log('hello there');
};

const sum = (a: number, b: number) => {
	return a + b;
};

console.log(sum(1, 2));

// array
const fruits = ['apple', 'banana', 'orange'];

fruits.push('pineapple');

// type alias

const userDetails = (id: number, fullName: string) => {
	console.log(`Your id is ${id}, and you name is ${fullName}`);
};

const userObjDetails = (id: number, user: userType) => {
	console.log(
		`Your id is ${id}, you name is ${user.name} and you city is ${user.city}`
	);
};

userObjDetails(1, { name: 'anik', city: 'rajbari' });

// array type
const array: (number | string)[] = [];

array.push(3);

// object type
let obj: {
	name: string;
};

obj = {
	name: 'anik sarker',
};

// Function type
let sumFunc: Function;

sumFunc = (a: number, b: number): number => {
	return a + b;
};

// Function Signature
let sayHello: (name: string) => string;

sayHello = (name: string) => {
	return `Your name is ${name}`;
};
