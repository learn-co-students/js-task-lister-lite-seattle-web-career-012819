const form = document.getElementById('create-task-form');
const input = document.getElementById('new-task-description');
const task = document.getElementById('tasks');
const priority = document.getElementById('priority');
const user = document.getElementById('new-task-user');
const duration = document.getElementById('new-task-duration');
const dateDue = document.getElementById('new-task-dateDue');


form.addEventListener('submit', function(ev){
  ev.preventDefault();

  const li = document.createElement('li');
  li.textContent = user.value + ": " + input.value + " for " + duration.value + " at " + dateDue.value;

  li.style.color = priority.value;
  //debugger

  li.addEventListener('click', function(ev){
    let bgColor = ev.target.style.backgroundColor;
    if (bgColor == ""){
      ev.target.style.backgroundColor = "yellow";
    }
    else {
      ev.target.style.backgroundColor = "";
    }


  })
  li.addEventListener('dblclick', function(ev){
      ev.target.remove();
  })

  task.appendChild(li);

});
