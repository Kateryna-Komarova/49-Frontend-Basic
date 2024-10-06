console.log("Задание 1");

const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const newArray = starWarsHeroes.map(
  (hero) => `name: ${hero.name}, isJedi: ${hero.isJedi}`
);

console.log(newArray);

function getHeroesWithJediStatus(heroes) {
  return heroes.map((hero) => ({
    name: hero.name,
    isJedi: hero.isJedi,
  }));
}
const heroesWithJediStatus = getHeroesWithJediStatus(starWarsHeroes);
console.log(
  "Новый массив  только c именами и статусом Джедая:",
  heroesWithJediStatus
);

console.log("Задание 2");

const youngHeroes = starWarsHeroes.filter(
  (hero) => hero.isJedi && hero.age < 40
);
console.log(youngHeroes);

const getYoungJedi = (heroes) => {
  return heroes.filter((hero) => hero.isJedi && hero.age < 40);
};

const youngJediArray = getYoungJedi(starWarsHeroes);
console.log("Задание 1.2: Джедаи младше 40 лет:", youngJediArray);

console.log("Задание 3");

const totalJediAge1 = starWarsHeroes
  .filter((hero) => hero.isJedi)
  .map((hero) => hero.age)
  .reduce((total, age) => total + age, 0);

console.log("totalJediAge" + ": " + totalJediAge1);
console.log();

function calculateTotalAgeOfJedi(heroes) {
  return heroes
    .filter((hero) => hero.isJedi)
    .reduce((total, hero) => total + hero.age, 0);
}
const totalJediAge = calculateTotalAgeOfJedi(starWarsHeroes);
console.log("Задание 1.3: Общий возраст джедаев:", totalJediAge);

console.log("Задание 4");

const heroesAges = starWarsHeroes.map((hero) => hero.age);
console.log(heroesAges);

let plusAge = heroesAges.reduce((acc, current) => acc + current, 10);
console.log("+ 10 лет" + ": " + plusAge);
console.log();

const increaseAgeByTen = (heroes) => {
  return heroes.map((hero) => ({
    ...hero,
    age: hero.age + 10,
  }));
};

const increasedAgeHeroes = increaseAgeByTen(starWarsHeroes);
console.log(
  "Задание 1.4: Возраст героев увеличен на 10 лет:",
  increasedAgeHeroes
);

console.log("Задание 5");
function replaceAnakinWithDarthVader(heroes) {
  return heroes.map((hero) => {
    if (hero.name === "Anakin Skywalker") {
      return { name: "Darth Vader", age: 50, isJedi: false };
    }
    return hero;
  });
}
const updateHeroes = replaceAnakinWithDarthVader(starWarsHeroes);
console.log(
  "Задание 5: Новый массив после замены Anakin Skywalker:",
  updateHeroes
);
