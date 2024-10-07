const transport = {
  speed: 140,
  color: "red",
  move: function () {
    console.log("I'm moving");
  },
};
const prop = "speed";

console.log(transport.speed);
console.log(transport["speed"]);

transport.move();


const car = {
    model: 'Tesla Model 3',
    __proto__: transport,
};
console.log(car.model);
console.log(car.speed);
car.move();


const ship = new Object();
// const ship = {};
ship.year = 1996;
console.log(ship.year);

Object.setPrototypeOf(ship, transport);
ship.move();






