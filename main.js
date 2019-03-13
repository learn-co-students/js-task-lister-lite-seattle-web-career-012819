const textInput = document.getElementById('new-task-description');
const submitButton = document.getElementById('submit-button');
const tasksList = document.getElementById('tasks');
const prioritySelector = document.getElementById('priority');

submitButton.addEventListener('click', function() {
  //add listItem
  const listItem = document.createElement('li');
  const toDoInput = textInput.value;
  const listItemContent = listItem.innerHTML = toDoInput;
  tasksList.appendChild(listItem);

  //add delete button to each listItem
  const deleteButton = document.createElement('button');
  deleteButton.setAttribute('id', 'delete');
  listItem.appendChild(deleteButton);

  deleteButton.addEventListener('click', function() {
    listItem.remove();
  });

  const selectedContent = prioritySelector.selectedIndex;
  listItem.setAttribute('class', prioritySelector[selectedContent].value);

});


// prioritySelector.addEventListener('click', function() {
//   const prioritySelectorValue = prioritySelector.value;
//   if (prioritySelectorValue === 0) {
//     listItem.style.color = red;
//   } else if (prioritySelectorValue === 1) {
//     listItem.style.color = yellow;
//   } else {
//     listItem.style.color = green;
//   }
// });



