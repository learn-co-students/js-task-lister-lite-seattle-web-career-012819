const input = document.getElementById('new-task-description');
const eventButton = document.getElementById('submit-button');
const tasks = document.getElementById('tasks');

eventButton.addEventListener('click', () => {
  const userInput = input.value
  const node = document.createElement('li');
  const textNode = document.createTextNode(userInput);
  node.appendChild(textNode);
  const tasks = document.getElementById("tasks");
  tasks.appendChild(node);
  const deleteButton = document.createElement('button');
  node.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    tasks.removeChild(node)
  });
  const setPriority = document.getElementById('priority');
  const selectedContent = setPriority.selectedIndex;
  node.setAttribute("class", setPriority[selectedContent].value);
  
});






