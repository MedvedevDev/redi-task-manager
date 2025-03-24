document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const resetButton = document.getElementById("reset-input");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);

        taskInput.value = ""; 
    });

    resetButton.addEventListener("click", () => {
        taskInput.value = ""; 
    });
});
