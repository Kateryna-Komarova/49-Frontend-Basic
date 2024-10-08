
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const heightInput = document.querySelector('input[name="height"]'); 
  const weightInput = document.querySelector('input[name="weight"]'); 
 
  const height = parseFloat(heightInput.value) / 100; 
  const weight = parseFloat(weightInput.value); 


  if (!height || !weight) {
    document.querySelector(".result").innerText = "Заполните оба поля!"; 
    document.querySelector(".status").innerText = ""; 
    return; 
  }

  
  const bmi = weight / (height * height);
  let status = ""; 


  if (bmi < 18.5) {
    status = "Недостаточный вес"; 
  } else if (bmi < 24.9) {
    status = "Нормальный вес"; 
  } else if (bmi < 29.9) {
    status = "Избыточный вес"; 
  } else {
    status = "Ожирение"; 
  }

  
  document.querySelector(".result").innerText = "Ваш BMI: " + bmi; 
  document.querySelector(".status").innerText = "Состояние: " + status; 
