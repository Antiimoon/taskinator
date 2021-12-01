var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#task-to-do");

var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.apeendChild("listItemEl")
}

buttonEl.addEventListener("click", createTaskHandler); {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    taskToDoEl.appendChild(listItemEl);
};
