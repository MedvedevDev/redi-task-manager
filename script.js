document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task-input");
    const addTaskButton = document.getElementById("add-task");
    const resetButton = document.getElementById("reset-input");
    const taskList = document.getElementById("task-list");

    // Add task
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");

        const taskContent = document.createElement("span");
        taskContent.textContent = taskText;
        taskContent.classList.add("task-content");

        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");

        // Button to complete a task
        const completeButton = document.createElement("button");
        completeButton.innerHTML = "✔";
        completeButton.classList.add("complete-btn");
        completeButton.addEventListener("click", function () {
            taskItem.classList.toggle("completed");
        });

        // Button to delete a task
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = "✖";
        deleteButton.classList.add("delete-btn");
        deleteButton.addEventListener("click", function () {
            taskItem.remove();
        });


        // Append complete and delete buttons for a task
        taskActions.appendChild(completeButton);
        taskActions.appendChild(deleteButton);

        // Append task text and actions
        taskItem.appendChild(taskContent);
        taskItem.appendChild(taskActions);

        taskList.appendChild(taskItem);
        taskInput.value = "";
    });

    // Reset input
    resetButton.addEventListener("click", function () {
        taskInput.value = "";
    });
});
