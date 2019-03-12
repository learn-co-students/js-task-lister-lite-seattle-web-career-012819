const input = document.getElementById('new-task-description');
const eventButton = document.getElementById('submit-button');
const tasks = document.getElementById('tasks');

eventButton.addEventListener('click', () => {
  const userInput = input.value
  const liNode = document.createElement('li');
  const textNode = document.createTextNode(userInput);
  liNode.appendChild(textNode);
  const tasks = document.getElementById("tasks");
  tasks.appendChild(liNode);
  const deleteButton = document.createElement('button');
  liNode.appendChild(deleteButton);
  deleteButton.addEventListener('click', () => {
    tasks.removeChild(liNode)
  });
  const setPriority = document.getElementById('priority');
  const selectedContent = setPriority.selectedIndex;
  liNode.setAttribute("class", setPriority[selectedContent].value);
  
});

const priorityButton = document.getElementById('prioritize');
priorityButton.addEventListener('click', () => {
  const priorityDropDown = document.getElementById('priority');
  const selectedPriority = priorityDropDown.selectedIndex;
  if (selectedPriority) === 0) {
    //pop up to the top
  }

}); 




