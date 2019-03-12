const input = document.getElementById('new-task-description');
const submit = document.getElementById('submit');
const tasks = document.getElementById('tasks');
let count = 0;

const addTask = (e) => {
  e.preventDefault();
  const task = document.createElement('li')
  tasks.appendChild(task);
  
  const priority = document.querySelector("#priority").value;
  const colors = ["green", "orange", "red"];
  
  task.innerHTML = `${input.value} <span id="delete${count}"><button>X</button></span>`;
  task.style.color = colors[priority];
  task.dataset.priority = priority;
  
  const deleteTaskButton = task.querySelector(`#delete${count}`)
  deleteTaskButton.addEventListener('click', () => {
    tasks.removeChild(task);
  });
  
  sortTasks(tasks);
}

const sortTasks = (parent) => {
  var children = Array.prototype.slice.call(parent.children)
  .map((x) => parent.removeChild(x))
  .sort((x, y) => Number(y.dataset.priority) - Number(x.dataset.priority))
  .forEach((x) => parent.appendChild(x));
}

submit.addEventListener('click', addTask);