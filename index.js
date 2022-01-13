

/*
const globalVar = 'test';

if (globalVar){
    const localVar = 10;
    console.log(localVar);
    console.log(globalVar);
    console.log('ok, true');

    if(localVar){
        const innerVar = true;
    }
} else {
    console.log('its false');
}

console.log('end of script');


const time = 18;


let result = (time >= 7 && time <= 17) ? 'light' : 'night';

console.log(result);



const number = +prompt('fefef');

if (isNaN(number)) {
    console.log('некорректное число');

} else if (number % 5 ===0) {
    console.log('делится на 5');
} else if (number % 3 ===0) {
    console.log('делится на 3');  
} else if (number % 2 ===0) {
    console.log('делится на 2');  
} else {
    console.log('kdjikdjekjdkwejfkwejfjwek');
}


let firstOperand = +prompt('firstOperand');
let secondOperand = +prompt('secondOperand');
let operator = prompt('operator \n + - * /');

switch (operator) {
    case '+':
        console.log(firstOperand + secondOperand);
        break;
    case '-':
        console.log(firstOperand - secondOperand);
        break;
    case '/':
        console.log(firstOperand / secondOperand);
        break;
    case '*':
        console.log(firstOperand * secondOperand);
        break;
    default:
        console.log('Введите нужный operator');
}

*/

/*
let a = 6;

function  fact (a) {
   let result = 1;
   for(let i = 1; i < a; i++) {
       result = result * i;

       return result;

   }


}





function square (widthRectangle, heightRectangle) {
    result = widthRectangle * heightRectangle;
    console.log(result);
    return result;
}

square (47, 2);

function circumference (diameter) {
    result = Math.PI * diameter;
    console.log(result);
    return result;
}

circumference (43);

function vCylinder (height, diameter) {
    result = Math.PI * ((diameter / 2) * (diameter / 2)) * height;
    console.log(result);
    return result;
}

vCylinder (10, 5);



function $ (a) {
    result = a * doll;
    return result;
}

function UAH (a) {
    result = a / doll;
    return result;
}



function converter (a, $, UAH) {
    const doll = 27.4;
    
    if(a, $) {
        result = a * doll;
        console.log(result);

    } else  {
        result = a / doll; 
        console.log(result);

    }
   


}

converter (274, UAH);


*/
/* 

классная работа (сумма четных чисел в заданом диапазоне)

function summ (a, b) {

    let result = 0;



    for(let i = a; i <= b; i++){
        if(i % 2 === 0) {
            result += i;
        }
    }
    return result;
}

    


const res = summ (1,7);
console.log(res);

*/

/*
function  fact(number) {  //факториал

    if (isNaN(number)) {
        return false;
    }

    if (number === 2 || number === 0) {
        return 1;
    }


    let result = 1n;

    for(let i = 1; i <= number; i++) {
        result = result * i;
    }
        return result;

 }

*/

/*
function getPower(base, power){

result = base ** power;

return result;



}

const res = getPower(5,5);
console.log(res);

*/

/*
const cat1 = {
    name: 'Barsik',
    age: 4,
    color: 'ginger',
    isMale: true,
    isSleeping: false,
    weight: 5,
    breed: 'Cheshirskiy',
    run: function(){
        return 'run'
    },

    sleep: function(){
        return 'sleep'
    },
};


function User(name, surname, fullName, age) {
    this.name = name;
    this.surname = surname;
    this.fullName = fullName;
    this.age = age;

}

const newUser = new User('serg', 'Kova', 'vas', 32);

function Avto(name, maxSpeed, speed){
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.accelerate = function(value){
        return this.speed + this.accelerate;
    }
    this.deaccelerate = function(value){
        return this.speed / 2;
    }
    this.stop = function(){
        return this.speed * 0;
    }
}

const avto = new Avto('VAZ', 160, 60);





function Worker(name, surname, age, rate, days){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.rate = rate;
    this.days = days;
    this.getSalary = function() {
        if(this.days > 31) {
            return false
        }
        return this.rate * this.days

    }
}


const rab = new Worker('Serg', 'Kova', 30, 20, 20);
*/
/*

let a =15;
let b = 5;

function getDet() {
    return 'of the num'
}

console.log(`sum ${getDet()} ${a} + ${b} = ${a + b}
`);


console.log(`divide ${getDet()} ${a} / ${b} = ${a / b}
`);

console.log(`mult ${getDet()} ${a} * ${b} = ${a * b}
`); 

console.log(`di ${getDet()} ${a} - ${b} = ${a - b}
`);

const user = {
    firstName: 'Vasya',
    lastName: 'Vasivi4',
    age: 18, 

}



function sayHello(name, lastName) {
    console.log(`say heLLo ${firstName} ${lastName}`);
}

const PROTOCOL ='http://';
const SERVER_IP = 'localhost';
const PORT = '80';

function createQuery(absPath) {
    const url = (`${PROTOCOL}${SERVER_IP}:${PORT}${absPath}`);
    return url;
}

const weekPlan = {
    Mon: 'Visit to stomatologist',
    Tue: 'Got salary',
    Wed: 'Meet friends',
    Thu: 'Hard working',
    Fri: 'Free day',
    Sat: 'Go to party',
}

function getPlanning() {
    let day = prompt('days');
    alert(weekPlan[day]);
    
}

function delitel(num){

    for (let i = 1; i < 10; i++) {
        if(num % i === 0){
            console.log(i)
        }
    }

}

delitel(12);


*/


// function MyArray(){
//     this.length = 0;
//     this.arguments = function(){

//     }


// function MyProtoArray(){
//     this.push = function(item) {
//         this[this.item] = item;
//         return ++this.length;
//     }

// this.pop = function(){
//     if(this.length === 0){
//         return
//     }

//     const delItem = this[this.length - 1];
//     delete this[--this.length];
    
//     return delItem;
// }
// }
// MyArray.prototype = new MyProtoArray(); // связь с прототипом



// function Student(firstName){
//     this.firstName = firstName;
//     this.says = function(say){
//         return `Студент ${this.firstName} говорит: ${say}`;
//     }
// }



// const fan = new Student('Petro', 'Vasa');


// function Lestnica (value){
//     this.value = 0;
//     this.up = function(){
//        this.value++;
//        return this;

//     }
//     this.down = function(){
//         this.value--;
//         return this;
//     }
//     this.showStep = function(){
//         return this.value;
//     }
// }

// const les = new Lestnica(7);


// function getAverage(){

//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];        
//     }
//    return (sum / arguments.length);


// }

// const array = [2, 3, 4, 5, 6];



// const res = [
//     Math.round(Math.random()*1) ,
// ];

// function getRandom(dimension){
//     const arr = [];

//     for (let i = 0; i < dimension; i++) {
//         arr.push = Math.round(Math.random() * 10);
//     }
//     return arr;
// }

// const arr = [2, 3, 4, 5, 6];


// function MyArray(){
//     this.length = 0;
//     this.arguments = function(){

//     }


// function MyProtoArray(){
//     this.push = function(item) {
//         this[this.item] = item;
//         return ++this.length;
//     }

//     this.pop = function(){
//         if(this.length === 0){
//         return
//     }

//     const delItem = this[this.length - 1];
//     delete this[--this.length];
    
//     return delItem;
//     }


// } 
// }
// MyArray.prototype = new MyProtoArray(); // связь с прототипом




function plusTwo (num) {
    return ++num + 1;
}
     

const masiv = [2, 3, 3, 4, 5];
const newMasiv = masiv.map(plusTwo);
console.log(newMasiv);




