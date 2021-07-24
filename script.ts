import { userType } from './type';

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
