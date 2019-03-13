const userDescription = document.getElementById('new-task-description');
const userTasks = document.getElementById('tasks');
const userForm = document.getElementById('create-task-form');

userForm.addEventListener('submit', function(ev) {
	ev.preventDefault();
	const inputDescription = userDescription.value;

	const contentGenerator = document.createElement('li');
	contentGenerator.setAttribute('id', inputDescription);
	contentGenerator.textContent = inputDescription;

	const deleteButton = document.createElement('button');
	contentGenerator.appendChild(deleteButton);
	deleteButton.setAttribute('id', 'delete-button');
	// deleteButton.childNodes[0].nodeValue="New Button Text using childNodes"
	deleteButton.addEventListener('click', removeTask);
	deleteButton.innerText = ' Delete';
	userTasks.appendChild(contentGenerator);
});

function removeTask(ev) {
	ev.currentTarget.parentNode.remove();
}

// delButton.addEventListener("click", function(ev) {
//    const delButton = document.getElementById("delete-button");
//    const delTask = document.getElementById(inputDescription);
//    delTask.parentNode.removeChild(delTask);
//    return false;
// });
