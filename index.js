const inputAdd = document.getElementById('input-add');
const addTask = document.getElementById('add-task');
const completeAll = document.getElementById('complete-all');
const clearCompleted = document.getElementById('clear-completed');
const incomplete = document.getElementById('incomplete');
const completed = document.getElementById('completed');
const taskCounter = document.getElementById('task-counter');
const deleteBtn = document.createElement('delete-btn');

// array
const myTasks = [];

const completedTasks = [];

inputAdd.addEventListener('click', function () {
  myTasks.push(addTask.value);
  addTask.value = '';
  renderTasks();
  taskCount();
});

function renderTasks() {
  let listItems = '';

  let count = 1;
  for (let task of myTasks) {
    listItems += `
    <div class="task">
    <input type="radio" id="task-${count}" name="task" value="task" class="input-radio">
    <label for="task-${count}">${task}</label>
    <img src="https://img.icons8.com/ios-glyphs/512/multiply.png" class="delete-btn" id="delete-btn">
    </div>
    `;
    count++;
  }
  incomplete.innerHTML = listItems;
}

// tasks left
function taskCount() {
  taskCounter.innerHTML = `
  <span class="text-highlight" >${myTasks.length}</span> tasks left
  `;
}

incomplete.addEventListener('change', function (e) {
  // console.log(document.getElementById(e.target.id).checked)
  // task complete highlight
  document
    .getElementById(e.target.id)
    .parentElement.classList.add('task-complete');

  // delete
  // console.log(document.getElementById(e.target.id).nextElementSibling.nextElementSibling)
  // console.log(document.getElementById(e.target.id).parentElement)

  // const parent = document.getElementById(e.target.id).parentElement;

  // parent.addEventListener('click', function () {
  //   console.log('delete')
  // })
  deleteBtn.addEventListener('click', function () {
    console.log('delete')
  })
});

