const newTaskDescription = document.getElementById("new-task-description");
const form = document.getElementById("create-task-form");
const list = document.getElementById("list");
const tasks = document.getElementById("tasks");
const deleteButton = document.getElementById("delete")
const itemPriority = document.getElementById("colors")
const listItems = document.getElementsByClassName("listItems")


form.addEventListener('submit', function(e){
    e.preventDefault();
    const li = document.createElement('li');
    li.setAttribute("class", "listItems")
    li.innerText = newTaskDescription.value;
    tasks.appendChild(li);
    li.style.color = itemPriority.value
    li.setAttribute("id", itemPriority.value)

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Taken Care Of"

    deleteButton.addEventListener('click', function(e){
        e.preventDefault();
        li.remove();
    })

    li.appendChild(deleteButton)

    newTaskDescription.value = '';
    prioritize()
});

function prioritize(){
    console.log("listies!", listItems);
    for (i=0; i<listItems.length; i++) {
	if (listItems[i].id === "red") {
        tasks.insertBefore(listItems[i], tasks.childNodes[0] || null)
    }
}
}