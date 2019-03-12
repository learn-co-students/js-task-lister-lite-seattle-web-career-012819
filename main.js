const input = document.getElementById("new-task-description");
const form = document.getElementById("create-task-form");
const list = document.getElementById("tasks");
const button = document.getElementById("button")




form.addEventListener('submit', function(en){
  console.log("is this working")
  en.preventDefault();
  let li = document.createElement('li')
  li.textContent = input.value
  let color = document.getElementById('colorChanger').value;
  if (color === 'red'){
      list.appendChild(li).style.backgroundColor = "red";
  }else if (color === 'yellow'){
      list.appendChild(li).style.backgroundColor = "yellow";
  }else if(color === 'green'){
      list.appendChild(li).style.backgroundColor = "green";
  }
  let dele = document.createElement('button')
  li.appendChild(dele)
  dele.addEventListener('click', removeListItem)
});

function removeListItem(ev) {
  ev.target.parentNode.remove()
}

color.addEventListener('change', function(){
  let color = document.getElementById('colorChanger')

})

