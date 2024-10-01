let hello = "hello.js'";

let student;
student = "Kate";
student = "Olga";


// TODO
// ! 
// *STRING

const language = 'JavaScript';
let planet = "Earth";
let greeting = "Мы с планеты " + planet;
let planetNumber = 3
let greeting1 = `Мы с планеты ${planet}.   Она находится в солнечной системе! Это ${planetNumber} планета от солнца.`;
//console.log(greeting);
//console.log(greeting1);
//console.log(student);
//console.log("hello.js");
//console.log(typeof hello);

//*NUMBER


let n1 = 42
let n2 = 3.14
let n3 = -41

let LastSafeInteger = Number.MAX_SAFE_INTEGER

//console.log(LastSafeInteger);
//console.log("numbers", n1, n2);

//*BOOLEAN


let isStudent = true;
let isBackend = false;


//* UNDEFINED

let  object;
//console.log(object);


//* NULL
// мы решили что будет ноль

let user = null

//console.log(user);

//* BIGINT
// тип данных для операций над большими челочисельнными

let bigNumber = 1000n;
let bigResult = 1000n +100n;


//console.log(typeof bigNumber);


//* SYMBOL
// уникальное символьное значение


let symbolID = Symbol(10);
//console.log(symbolID);



//! ОПЕРАЦИИ НАД ДАННЫМИ

let sum = 2 + "2";
console.log(sum);
//явное через String
let sum1 = String(42) + " - ответ";
console.log(sum1);

// * преобразование в число


let sum2 = 2 + Number("2");
console.log(sum2);


let sum3 = 1000 + Number("100$");
console.log(sum3);

// parseInt()

let sum4 = 1000 + parseInt("100$");
console.log(sum4);


// Значение для false js


// false
// 0
// null
//undefined
// "" пустая строка
// NaN not a number
// 0n bigint
// -0

let b1 = Boolean("");
let b2 = Boolean(-100);


//! МАТЕМАТИЧЕСКИЕ ОПЕРАТОРЫ

let v1 = 12+45;
let v2 = 10-5;
let v3 = 2*2;
let v4 = 10**10; // в степень
let v5 = 8/4;
let v6 = 13 % 2
let v7 = Math.sqrt(16); //квадратный  корень
// случайное число  1-0
let random = Math.random();

//случ число от 1 до 100
let random1 = Math.floor(Math.random() * 100) + 1;

console.log(v7);
console.log(random1);


//! ОПЕРАТОРЫ СРАВНЕНИЯ

//* >, <, >=, <=, ===, ==, !==
let result = ((25+10) - 5) < (25+(20-5));

// == это равенство с привидением типов
// === это строгое равенство
const result1 = 25 !== "25" // будет tru
const result2 = !true;

console.log(result2);


















