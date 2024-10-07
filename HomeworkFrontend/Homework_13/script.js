console.log("Task_01");

const arrayToObject = (array) =>
  Object.fromEntries(array.map((data) => [data, data]));

const result = arrayToObject(["Kateryna Komarova", 34, "Ukraine"]);
console.log(result);

console.log("Task_02");

function arrayPairsToObject(array) {
  return Object.fromEntries(array);
}

const men = [
  ["height", 190],
  ["weight", 95],
  ["full name", "Mieke Jordan "],
  ["sport", "Basketball"],
];

const result2 = arrayPairsToObject(men);
console.log(result2);

console.log("Task_03");

function objectValuesToString(object) {
  return Object.values(object) + " ";
}

const myCat = {
  name: "Basya",
  age: 8,
  color: "grey",
};
const result3 = objectValuesToString(myCat);
console.log(result3);

console.log("Task_04");

function objectTypes(object) {
  const result = {};

  Object.entries(object).forEach(([key, value]) => {
    result[key] = typeof value;
  });
  return result;
}
const myCat1 = {
  name: "Basya",
  age: 8,
  color: "grey",
};

const result4 = objectTypes(myCat1);
console.log(result4);

console.log("Task_05");

function complexObjectTypes(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => [
      key,
      { value, type: typeof value },
    ])
  );
}
const myCat2 = {
  name: "Basya",
  age: 8,
  color: "grey",
};

const result5 = complexObjectTypes(myCat2);
console.log(result5);

console.log("Task_05*");

function calculateCost(bucket, products) {
  let total = 0;

  for (const candy in bucket) {
    let price = 0;
    for (const candys in products) {
      if (candy in products[candys]) {
        price = products[candys][candy];
        break;
      }
    }
    total += bucket[candy] * price;
  }
  return total;
}

const bucket = { lollipop: 10, jelly: 7 };
const products = {
  candys1: { lollipop: 2 },
  candys2: { jelly: 4.0 },
};

const resultCandy = calculateCost(bucket, products);
console.log(`Общая сумма к оплате за конфеты: ${resultCandy}`);
