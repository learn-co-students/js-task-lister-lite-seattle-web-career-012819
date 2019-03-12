const newTaskButton = document.querySelector('input[type="submit"]')

const newTaskDescription = document.getElementById('new-task-description')

const taskList = document.getElementById('tasks')

const newTaskPriority = document.getElementById('new-task-priority')

newTaskButton.addEventListener('click', () => {
  if (newTaskDescription.value != '') {
    let newItem = document.createElement('li')

    let newDescription = document.createTextNode(newTaskDescription.value)
    let deleteButton = document.createElement('button')
    deleteButton.textContent = 'x'

    let newPriority = newTaskPriority.options[newTaskPriority.selectedIndex].value
    if (newPriority === 'Low') {
      // newItem.setAttribute('style', 'color: green') --> other option
      newItem.style.color = 'green'
    }
    else if (newPriority === 'Medium') {
      newItem.style.color = 'orange'
    }
    else if (newPriority === 'High') {
      newItem.style.color = 'red'
    }

    deleteButton.addEventListener('click', deleteHandler)

    newItem.appendChild(newDescription)
    newItem.appendChild(deleteButton)
    taskList.appendChild(newItem)
  }
})

function deleteHandler (e) {
  // e.target.parentElement.removeChild(e.target)
  let listItem = e.target.parentElement
  let itemList = listItem.parentElement
  itemList.removeChild(listItem)
}
