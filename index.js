const inputAdd = document.getElementById('input-add');
const completeAll = document.getElementById('complete-all');
const clearCompleted = document.getElementById('clear-completed');
const deleteBtn = document.getElementById('delete-btn');
const addTask = document.getElementById('add-task');
const incomplete = document.getElementById('incomplete');

// array
const myTasks = [];

inputAdd.addEventListener('click', function () {
  myTasks.push(addTask.value);
    console.log(myTasks);
    
    incomplete.innerHTML += `
          <div class="task">
                  <input type="radio" id="task" name="task" value="task" class="input-radio">
                  <label>${addTask.value}</label>
                  <img src="https://img.icons8.com/ios-glyphs/512/multiply.png" class="delete-btn" id="delete-btn">
              </div>
      `;

});
