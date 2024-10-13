resultOfFetch
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((bodyOfResponse) => {
    console.log(bodyOfResponse);
  });

resultOfFetch.catch((error) => {
  console.log('Здесь ошибка', error);
});

resultOfFetch.finally(()=> {
    console.log('Finally, в конце выполняется')
});

console.log('Программа работает дальше');

// Оборачиваем данные в пропис!!!!
// const r = Math.random();

// const rInPromise = new Promise((res, rej) => {
//   res(Math.random());
// });

// console.log(r);

// rInPromise.then((r) => {console.log(r)});

