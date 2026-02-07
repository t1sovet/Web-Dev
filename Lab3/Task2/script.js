const button = document.getElementById("add-button");
const input = document.getElementById("taskInput");
const lst = document.getElementById("reminders-list");

button.addEventListener("click", addTask);
let remindersCount = 0;

function addTask() {
    let txt = input.value;
    remindersCount++;
    lst.style.border = "1px solid darkgrey";
    const reminder = document.createElement("li");
    const reminderrContainer = document.createElement("div");
    reminderrContainer.className = "reminder-container";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const span = document.createElement("span");
    span.textContent = txt;
    span.className = "reminder-text";
    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = '<img class="trash-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgy6cH4pk8uBtQ-_MBHx5MtDO8ms62KxR0UQ&s">';
    deleteBtn.className = "delete-btn";

    reminderrContainer.appendChild(checkbox);
    reminderrContainer.appendChild(span);
    reminderrContainer.appendChild(deleteBtn);
    reminder.appendChild(reminderrContainer);
    lst.appendChild(reminder);


    checkbox.addEventListener("change", function () {
        if (span.style.textDecoration == "") {
            span.style.textDecoration = "line-through";
        } else {
            span.style.textDecoration = "";
        }
    });


    deleteBtn.addEventListener("click", function () {
        lst.removeChild(reminder);
        --remindersCount;
        if (remindersCount == 0) {
            lst.style.border = "none";
        }
    });



}
