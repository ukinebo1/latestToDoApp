let inputField = document.querySelector("#input");
let button = document.querySelector("#btn");
let listContainer = document.querySelector("#listContainer");

function addTask() {
  if (inputField.value === "") {
    alert("You Must Enter a Task to Continue");
  } else {
    let newLists = document.createElement("li");
    newLists.textContent = inputField.value;
    listContainer.append(newLists);
    let spanElement = document.createElement("span");
    spanElement.innerHTML = "\u00d7";
    newLists.append(spanElement);
  }
  inputField.value = "";
  storage()
}

function completedOrDelete(e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle = "checked";
    storage()
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    storage()
  }
  false;
}

listContainer.addEventListener("click", completedOrDelete);

function storage(){
    localStorage.setItem('todoStorage', listContainer.textContent)
}

function showTask(){
    listContainer.innerHTML =localStorage.getItem("todoStorage")
}
showTask()