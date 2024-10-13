// const obj1 = {
//   name: "kate",
//   age: 34,
//   favouriteFood: {
//     sweet: "candy",
//     salty: "pizza",
//   },
// };

const arr1 = [
  {
    name: "Kate",
    age: 18,
    sayHello() {
      console.log("hello");
    },
  },
  {
    name: "John",
    age: 25,
  },
  {
    name: "loki",
    age: 89,
  },
];
const _ = require('lodash');
console.log(arr1);
const arr2 = _.cloneDeep(arr1);
console.log(arr2);









// const obj2 = {...obj1};
// const obj2 = Object.assign({},obj1);
//*DEEP COPY
//*LODASH

// const obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.name = "Kakot";
// obj2.favouriteFood.sweet = "bulka";

// console.log(obj1);
// console.log(obj2);
