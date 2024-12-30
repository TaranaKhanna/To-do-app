const addTaskBtn = document.getElementById('btn');
const taskContainer = document.getElementById('tasks');
const taskList = document.getElementById("task-list");
let errorMessageContainer = document.getElementById('error');

addTaskBtn.addEventListener("click", () => {
    taskContainer.classList.toggle('active');
    
})

const submitForm = document.querySelector('#submit')

submitForm.addEventListener("click", (event) => {
        event.preventDefault();

const taskInput = document.getElementById('task');
const dateInput = document.getElementById('date');
const task = taskInput.value.trim();
const date = dateInput.value;

errorMessageContainer.textContent = "";

if(!task){
    errorMessageContainer.classList.add('p');
    errorMessageContainer.style.color = 'red';
    errorMessageContainer.textContent = "Task field is required!";
    taskInput.insertAdjacentElement('afterend', errorMessageContainer);
    return;
}

const taskElement = document.createElement("div");
taskElement.classList.add("task-item");
taskElement.innerHTML = `   
    <p><strong>Task: </strong> ${task}</p>
    <p><strong>Due Date: </strong>${date || "No due date"}</p>
    <button class="delete-btn">Delete</button>
`;

taskElement.querySelector(".delete-btn").addEventListener("click", () => {
    taskElement.remove();
});

taskList.appendChild(taskElement);

taskInput.value = "";
dateInput.value = "";
});
