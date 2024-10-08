const JohnyDepp = {
  name: "Johny",
  surname: "Depp",
  age: 50,
  hobbies: ["cricket", "bowling", "fishing"],
  films: {
    year1999: ["Pirates1", "Edward"],
    year2003: ["Pirates2", "Pirates3"],
  },
  singing() {
    console.log("I am singing");
  },
};

JohnyDepp.singing();

const RikkiMartinConcert240511998 = {
  city: "Berlin",
  date: "1998-06-25 14:00",
  bilets: 8000,
  songs: ["La la", "Da vida loca"],
};

console.log(JohnyDepp.name);
console.log(JohnyDepp["name"]);

JohnyDepp.weight = 70;
console.log(JohnyDepp);

delete JohnyDepp.age;
console.log(JohnyDepp);

const ifJohnyHas = "age" in JohnyDepp;
console.log(ifJohnyHas);

console.log(Object.hasOwn(JohnyDepp, "weight"));

const keysForJohny = Object.keys(JohnyDepp);
console.log(keysForJohny);

const valuesForJohny = Object.values(JohnyDepp);
console.log(valuesForJohny);

const filmsJhony = Object.values(JohnyDepp.films);
console.log(filmsJhony);

//!.forEach
const allFilms = [];
filmsJhony.forEach((filmsOfYear) => {
  allFilms.push(...filmsOfYear);
});
console.log(allFilms);

//! Flat
const newArray = filmsJhony.flat();
console.log(newArray);

//! Entries
console.log(Object.entries(JohnyDepp));
