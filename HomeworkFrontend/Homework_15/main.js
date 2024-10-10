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

// Функция для отображения задач
const showTasks = (filter = "all") => {
    ul.innerHTML = ""; // Очищаем список

    tasks
        .filter(task => 
            filter === "all" || 
            (filter === "completed" && task.isDone) || 
            (filter === "uncompleted" && !task.isDone))
        .forEach((task, index) => {
            const li = document.createElement("li");
            li.innerText = task.task;
            li.className = task.isDone ? "list-item list-item_done" : "list-item";

            // Меняем статус задачи при клике
            li.addEventListener("click", () => {
                alarmSound.play();
                tasks[index].isDone = !tasks[index].isDone;
                showTasks(filter); // Обновляем список

            });

            ul.appendChild(li);
        });
};

// Добавление новой задачи
createBtn.addEventListener("click", () => {
    alarmSound1.play();
    const taskText = taskInput.value.trim();
    if (taskText) {
        tasks.push({ task: taskText, isDone: false });
        taskInput.value = ""; // Очищаем поле ввода
        showTasks(); // Обновляем список
        
    }
});

// Обработчики для кнопок фильтрации
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        showTasks(button.id); // Отображаем задачи по фильтру
        
    });
});

// Первоначальный показ всех задач
showTasks();

