"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fullName = 'anik sarker';
var myFunc = function () {
    console.log('hello there');
};
var sum = function (a, b) {
    return a + b;
};
console.log(sum(1, 2));
// array
var fruits = ['apple', 'banana', 'orange'];
fruits.push('pineapple');
// type alias
var userDetails = function (id, fullName) {
    console.log("Your id is " + id + ", and you name is " + fullName);
};
var userObjDetails = function (id, user) {
    console.log("Your id is " + id + ", you name is " + user.name + " and you city is " + user.city);
};
userObjDetails(1, { name: 'anik', city: 'rajbari' });
// array type
var array = [];
array.push(3);
// object type
var obj;
obj = {
    name: 'anik sarker',
};
