// const isUserLoggedIn = true;
// //*if else operator
// if (isUserLoggedIn){
//     alert("You are logged in!")
// }else{
//     alert("You are not logged in!")
// }

// //*тернарный
// isUserLoggedIn ? alert("You are logged in!") : alert("You are not logged in!")

//*Switch operator

// const age = 90;

// switch(age){
//     case 20:
//     alert("You are young");
//     break;
//     case 50:
//         alert("You are good");
//         break;
//         case 90:
//             alert("You are old");

// }

// let num = 50;
// num += 30;
// // num = num + 30
// console.log(num);

// const subscribers = [
//   { name: "Andrew", isCloseFriend: true },
//   { name: "Sasha", isCloseFriend: false },
//   { name: "Peter", isCloseFriend: false },
//   { name: "Vitaly", isCloseFriend: false },
// ];

// function quantity(arr) {
//   if (arr.length > 1) {
//     alert("Congrats");
//   } else {
//     alert("loser");
//   }
// }
// quantity(subscribers);
//* цикл for
// for (let i = 0; i < subscribers.length; i++) {
//   console.log(subscribers[i]);
// }
//* цикл for of
//  for(const item of subscribers){
//     console.log(item);
//  }

//* цикл for in

// const obj = {
//     name: "Kate",
//     age:16,
//     sex:"female"
// }

// for (const key in obj){
//     console.log(key);

// }

// for (const key in obj){
//     console.log(obj[key]);
// }
//* цикл for while
// let i = 0;
// while(i < subscribers.length){
//     console.log(subscribers[i]);
//     i++;
// }

//* цикл do while

// let i = 0;
// do{
//     console.log(subscribers[i]);
//     i++;

// }while (10 > 10)

// function squareArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         arr[i] *= arr[i]
//     }
//     return arr;
// }

// const numbers = [1,2,3,4];
// console.log(squareArr(numbers));

// const people = [
//   { name: "Ross", sex: "male" },
//   { name: "Monica", sex: "female" },
//   { name: "Chandler", sex: "male" },
//   { name: "Phoebe", sex: "female" },
//   { name: "Joey", sex: "male" },
//   { name: "Rachel", sex: "female" },
// ];

// function addNiceAdjective(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element.sex === "male") {
//       element.name += " handsome";
//     } else {
//       element.name += " beutiful";
//     }
//   }
//   return arr;
// }

// console.log(addNiceAdjective(people));

// function addNiceAdjective(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//       element.name += (element.sex ==="male")? " handsome" : " beutiful";
//   }
//   return arr;
// }

// console.log(addNiceAdjective(people));

// const numbers = [1, 3, 5, 7, 9, 1, 2, 8, 9, 1];
// function getRepetitionOfNumber(numbersArr, number) {
//   let counter = 0;
//   for (item of numbersArr) {
//     if (item === number) {
//       counter++;
//     }
//   }

//   return counter > 0 ? counter : "Данного числа немає в масиві";
// }
// console.log(getRepetitionOfNumber([1, 3, 5, 7, 9, 1, 2, 8, 9, 1], 1));
const people1 = [
  { name: "Ross", sex: "male", age: 20 },
  { name: "Monica", sex: "female", age: 76 },
  { name: "Chandler", sex: "male", age: 47 },
  { name: "Phoebe", sex: "female", age: 34 },
  { name: "Joey", sex: "male", age: 56 },
  { name: "Rachel", sex: "female", age: 34 },
];

// const count = {
//   men: 0,
//   women: 0,
// };

// people1.forEach(function (item, index) {
//   // if (item.sex === "male") {
//   //   count.men++;
//   // } else {
//   //   count.women++;
//   // }
//   item.sex === "male" ? count.men++ : count.women++;
// });
// console.log(count);
// const adultsUsers = people1.filter(function (item){
//   return item.age < 30;
// });
// console.log(adultsUsers);
const filteredArr = people1.filter((item) => item.age > 17);
console.log(filteredArr);

// const correctNames = people1.map(function (item){
//   return item.sex === "male" ? "Mr. " + item.name : "Mrs. " + item.name
// });
// console.log(correctNames);

// const sum = people1.reduce(function (accu, currentValue) {
//   return accu + currentValue.age;
// }, 0);
// console.log(sum / people1.length);

// const foundObj = people1.find(function(item){
//   return item.age > 18 ;

// });
// console.log(foundObj);

// const foundObj = people1.some(function(item){
//   return item.age > 18 ;

// });
// console.log(foundObj);

// const foundObj = people1.every(function(item){
//   return item.age > 18 ;

// });
// console.log(foundObj);

// const foundObj = people1.findIndex(function(item){
//   return item.name === "Ross" ;

// });
// console.log(foundObj);

// function sayHello() {
//   console.log("hello");
// }

// const sayHello2 = () => {
//   console.log("hello 2");

// }

// function sayHelloToPerson(name) {
//   console.log("hello, " + name);
// }

// const sayHelloToPerson2 = (name) => {
//   console.log("hello" + name);
// }
// sayHelloToPerson2("Kate")

// function sum(a, b) {
//   console.log(a + b);
// }

// const sum2 = (a, b) => a + b ;
// console.log(sum2(10, 5));
