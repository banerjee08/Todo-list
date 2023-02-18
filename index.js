const inputAdd = document.getElementById('input-add');
const addTask = document.getElementById('add-task');
const completeAll = document.getElementById('complete-all');
const clearCompleted = document.getElementById('clear-completed');
const deleteBtn = document.getElementById('delete-btn');
const incomplete = document.getElementById('incomplete');
const completed = document.getElementById('completed');
const taskCounter = document.getElementById('task-counter');

// array
const myTasks = [];

inputAdd.addEventListener('click', function () {
  myTasks.push(addTask.value);
  addTask.value = '';
  renderTasks();
  taskCount();
});

function renderTasks() {
  let listItems = '';

  for (let task of myTasks) {
    listItems += `
    <div class="task">
    <input type="radio" id="task" name="task" value="task" class="input-radio">
    <label>${task}</label>
    <img src="https://img.icons8.com/ios-glyphs/512/multiply.png" class="delete-btn" id="delete-btn">
    </div>
    `;
  }
  incomplete.innerHTML = listItems;
}

// tasks left
function taskCount() {
  taskCounter.innerHTML = `
  <span class="text-highlight" >${myTasks.length}</span> tasks left
  `;
}
