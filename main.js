const form = document.getElementById("create-task-form");

const input = document.getElementById("new-task-description");

const list = document.getElementById("list");

const tasks = document.getElementById("tasks");

form.addEventListener("submit", function(event) {
    event.preventDefault()
    const newTask = input.value;
    let li = document.createElement('li');
    li.textContent = newTask;
    tasks.appendChild(li);
    list.appendChild(tasks);


li.addEventListener("click", function(ev) {
    ev.target.remove();
    // li.style.display = 'none';
});
});
