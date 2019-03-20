function getInput(e) {
	e.preventDefault();
	let task = document.getElementById('new-task-description').value;
	buildTask(task);
}

function buildTask(task) {
	//target tasks ul
	let taskList = document.getElementById('tasks');

	//build li for task list
	let taskLi = document.createElement('li');
	taskLi.textContent = task;
	taskLi.id = task;

	//delete button
	let deleteButton = document.createElement('button');
	deleteButton.textContent = 'X';
	deleteButton.addEventListener('click', function() {
		deleteTask(task);
	});

	//append elements to index.html
	taskLi.appendChild(deleteButton);
	taskList.appendChild(taskLi);
}

function deleteTask(task) {
	let liToDelete = document.getElementById(task);
	liToDelete.remove();
	console.log('element deleted');
}

let form = document.getElementById('create-task-form');
form.addEventListener('submit', getInput);
getInput();
