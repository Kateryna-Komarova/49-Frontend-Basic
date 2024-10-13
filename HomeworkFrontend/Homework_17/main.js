const taskInput = document.querySelector(".task-input");
const createBtn = document.querySelector(".actions .btn");
const filterButtons = document.querySelectorAll(".status .btn");
const ul = document.querySelector(".list");
const alarmSound = document.querySelector("#alarmSound");

let tasks = [
  { task: "Сделать домашку", isDone: true },
  { task: "Повторить", isDone: false },
  { task: "Купить молоко", isDone: false },
];

const showTasks = (filter = "all") => {
  ul.innerHTML = "";

  tasks
    .filter(
      (task) =>
        filter === "all" ||
        (filter === "completed" && task.isDone) ||
        (filter === "uncompleted" && !task.isDone)
    )
    .forEach((task, index) => {
      const li = document.createElement("li");
      li.innerText = task.task;
      li.className = task.isDone ? "list-item list-item_done" : "list-item";

      li.addEventListener("click", () => {
        alarmSound.play();
        tasks[index].isDone = !tasks[index].isDone;
        showTasks(filter);
      });

      ul.appendChild(li);
    });
};

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    tasks = data
      .slice(10, 15)
      .map((item) => ({ task: item.title, isDone: item.completed }));
    showTasks();
  });

createBtn.addEventListener("click", () => {
  alarmSound1.play();
  const taskText = taskInput.value.trim();
  if (taskText) {
    tasks.push({ task: taskText, isDone: false });
    taskInput.value = "";
    showTasks();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showTasks(button.id);
  });
});
