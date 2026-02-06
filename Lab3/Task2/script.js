const button = document.getElementById("add-button");
const input = document.getElementById("taskInput");

button.addEventListener("click", addTask);

function addTask() {
    const text = input.value.trim();
    alert(text);
}