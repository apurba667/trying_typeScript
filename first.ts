let age:number = 50;
let club:string = 'Real Madrid';
console.log(club);
const isFamous : boolean = false;

function add (num1 : number ,num2 : number){
return num1+num2;
}

add(2,3);

function fullName (firstName : string,lastName : string):string{
    return firstName + " "+ lastName;
}

const userOne =fullName('Apurba ','Roy');



function doubleItAndConsole(num :number){
    const result = num*2;
    console.log(result);
}

doubleItAndConsole(20);

const multiply = (x : number,y:number):number =>  x*y;
console.log(multiply(25,5));

const numbers =[2,3,4,5,6,7,313,4345,43];
numbers.push(22);
let megaName:string = ' ';
const friends : string[] =['George','jeff','bill','Abdul'];
for (let i = 0; i < friends.length; i++) {
    const friend : string = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log(megaName);

// Object 

let player :{
    club : string,
    salary : number
} = {
    club : 'real Madrid',
    salary: 234545
}
let friend: {name :string , age: number} = {
    name : 'Apurba',
    age : 32
}
// const friend ={
//     name : 'Samuel David',
//     age : 61
// }

// friend.age = 57;

interface Player{
    club : string,
    name : string,
    salary : number,
    wife? : string,
    inPlaying : boolean
}

const messy : Player ={
    name : 'Messy',
    club : 'real Madrid',
    salary : 2134135,
    wife : 'Ache keu ekjon',
    inPlaying : true
}

const ronaldo : Player = {
    name : 'Ronaldo',
    club : 'real Madrid',
    salary : 213413532,
    inPlaying : true
}

function getBonous(player : Player){
    return player.salary * 0.1;
}

const poorPlayer = {salary : 10000}

getBonous(messy)

class Person {
    name : string;
    private _partner : string;
   readonly fatherName : String ;
    constructor(name : string, father : string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() : string{ 
        return this.name + " " + this._partner;
    }
}

const sam = new Person('samuel','David')
console.log('name',sam.name);
console.log('name',sam.fatherName);
const samName :string =  sam.getName();
sam.name = 'Ben';
//sam.fatherName ='ewrfreg' // can't change cause its reads only 