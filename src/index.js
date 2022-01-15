// default text color
let selectedColor = "black";

document.addEventListener("DOMContentLoaded", () => {

  //changes the color of the tasks' priority
  const priorityDropDown = document.getElementById("selectPriority");
  priorityDropDown.addEventListener("change", selectHandler);

  //submit event
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    listToDo(event.target.new_task_description.value);
  });
});


function listToDo(todo) {
  let p = document.createElement("li");
  let btn = document.createElement("button");
  let editBtn = document.createElement("button");
  let editText = document.createElement("input")
  editText.classList.add("editBox");

//click event
  btn.addEventListener("click", handleDelete);
  editBtn.addEventListener("click", () => {
    p.append(editText);
  });
  editText.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      p.textContent = editText.value;
      p.append(btn, editBtn);
    }
  })
  btn.innerHTML = "X";
  editBtn.innerHTML = "Edit";
  p.textContent = `${todo}`;
  p.style.color = selectedColor;
  p.append(btn, editBtn);
  document.querySelector("#tasks").appendChild(p);
}

function handleDelete(event) {
  event.target.parentNode.remove();
}

function selectHandler(event) {
  selectedColor = event.target.value;
}