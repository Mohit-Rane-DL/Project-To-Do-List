import "./styles.css";

const taskList = document.querySelector(".lists");
const taskInput = document.querySelector("#to-do");
const addButton = document.querySelector(".add");

loadTasks();

function addTask(){
  const task = taskInput.value;

  if(task){
    createTask(task);
    taskInput.value = "";
    saveTasks();
  }
  else{
    alert("Enter a task");
  }
}

addButton.addEventListener("click", addTask);

function createTask(task){
  const listItem = document.createElement("li");
  listItem.textContent = task;
  const deleteButton = document.createElement("button");
  deleteButton.textContent = " x";
  listItem.appendChild(deleteButton);
  taskList.appendChild(listItem);

  deleteButton.addEventListener("click", function(){
    taskList.removeChild(listItem);
    saveTasks();
  });
}

function saveTasks(){
  let tasks = [];
  taskList.querySelectorAll("li").forEach(function (item){
    tasks.push(item.textContent.replace(" x", ""));
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks(){
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach(createTask);
}