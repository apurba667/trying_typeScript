"use strict";
let age = 50;
let club = 'Real Madrid';
console.log(club);
const isFamous = false;
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
const userOne = fullName('Apurba ', 'Roy');
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
doubleItAndConsole(20);
const multiply = (x, y) => x * y;
console.log(multiply(25, 5));
const numbers = [2, 3, 4, 5, 6, 7, 313, 4345, 43];
numbers.push(22);
let megaName = ' ';
const friends = ['George', 'jeff', 'bill', 'Abdul'];
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log(megaName);
// Object 
let player = {
    club: 'real Madrid',
    salary: 234545
};
let friend = {
    name: 'Apurba',
    age: 32
};
const messy = {
    name: 'Messy',
    club: 'real Madrid',
    salary: 2134135,
    wife: 'Ache keu ekjon',
    inPlaying: true
};
const ronaldo = {
    name: 'Ronaldo',
    club: 'real Madrid',
    salary: 213413532,
    inPlaying: true
};
function getBonous(player) {
    return player.salary * 0.1;
}
const poorPlayer = { salary: 10000 };
getBonous(messy);
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name + " " + this._partner;
    }
}
const sam = new Person('samuel', 'David');
console.log('name', sam.name);
console.log('name', sam.fatherName);
const samName = sam.getName();
sam.name = 'Ben';
//sam.fatherName ='ewrfreg' // can't change cause its reads only 
