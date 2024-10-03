console.log("First task:");

const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];
const result = [];

result.push(`${names[0]} ${ages[0]} года.`);
result.push(`${names[1]} ${ages[1]} год.`);
result.push(`${names[2]} ${ages[2]} лет.`);
result.push(`${names[3]} ${ages[3]} года.`);
console.log(result);
console.log();


console.log("Second task:");

const newResult = [...result];
newResult.reverse();
console.log(newResult);
console.log();


console.log("Third task:");

const countries = [];

countries.push("Франция", "Германия", "Италия");
const deletedCountry = countries.pop("Италия");
countries.unshift(deletedCountry);
console.log(countries);
console.log();


console.log("Fourth task:");
const car = {
  brand: "Lexus",
  model: "Overtrail",
  year: 2024,
  isElectric: true,

  displayInfo: function () {
    return `Информация о машине: Марка - ${this.brand}, Модель - ${this.model}, Год выпуска - ${this.year}, Электрический - ${this.isElectric}`;
  },
};

const keys = Object.keys(car);
console.log("Ключи объекта:", keys);

const values = Object.values(car);
console.log("Значения объекта:", values);

const carInfo = car.displayInfo();
console.log(carInfo);

for (let key in car) {
  if (car.hasOwnProperty(key)) {
    if (typeof car[key] !== "function") {
      console.log(`Ключ: ${key}, Значение: ${car[key]}`);
    }
  }
}
