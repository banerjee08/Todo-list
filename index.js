const inputAdd = document.getElementById('input-add');
const addTask = document.getElementById('add-task');
const incomplete = document.getElementById('incomplete');
const taskCounter = document.getElementById('task-counter');

// array
const myTasks = [];

// Pushing Tasks in the array via eventlistner
inputAdd.addEventListener('click', function () {
  myTasks.push(addTask.value);
  addTask.value = '';
  renderTasks();
  taskCount();
});

// Rendering Tasks dynamically
function renderTasks() {
  let listItems = '';
  let count = 1;
  for (let task of myTasks) {
    listItems += `
    <div class="task">
    <input type="radio" id="task-${count}" name="task" value="task" class="input-radio">
    <label for="task-${count}">${task}</label>
    <button class="delete-btn" onclick="delTask(${myTasks.indexOf(task)})">X</button>
    </div>
    `;
    count++;
  }
  incomplete.innerHTML = listItems;
}

// Deleting a task from the list
function delTask(myTask){
  myTasks.splice(myTask, 1)
  taskCount();
  renderTasks()
}

 // highlighting task
incomplete.addEventListener('change', function (e) {
  document
    .getElementById(e.target.id)
    .parentElement.classList.add('task-complete');
  
});

// Task Counter
function taskCount() {
  taskCounter.innerHTML = `
  <span class="text-highlight" >${myTasks.length}</span> tasks left
  `;
}