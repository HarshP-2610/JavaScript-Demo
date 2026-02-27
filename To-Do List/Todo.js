document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addBtn = document.getElementById('add-btn');
    const taskList = document.getElementById('taskList');

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const text = taskInput.value.trim();
        if (text === "") return;

        const taskItem = document.createElement('div');
        taskItem.className = 'task-item';

        taskItem.innerHTML = `
            <span class="task-text">${text}</span>
            <div class="btns">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        // Delete Logic
        taskItem.querySelector('.delete-btn').addEventListener('click', () => {
            taskItem.remove();
        });

        // Edit Logic
        taskItem.querySelector('.edit-btn').addEventListener('click', function () {
            const span = taskItem.querySelector('.task-text');
            const currentText = span.innerText;
            const newText = prompt("Edit your task:", currentText);
            if (newText !== null && newText.trim() !== "") {
                span.innerText = newText;
            }
        });

        taskList.appendChild(taskItem);
        taskInput.value = ""; // Clear input
    }

    // Allow pressing "Enter" to add task
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addTask();
    });
});