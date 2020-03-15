document.addEventListener('DOMContentLoaded', () => {
  submitData()
})

const submitData = () => {
  document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault()

    input = document.getElementById('new-task-description').value
    const task = document.createElement('li')
    task.innerText = input

    addTask(task)
    deleteTask(task)
    
    event.target.reset()
  })
}

const addTask = (task) => {
  tasks = document.getElementById('tasks')
    tasks.appendChild(task)
}

const deleteTask = (task) => {
  task.addEventListener('click', () => {
    task.remove()
  })
}

    


























// document.addEventListener("DOMContentLoaded", function() {
  
//   document.querySelector('form').addEventListener("submit", function(event) {
//     event.preventDefault();
//     const newTaskDescription = document.getElementById("new-task-description");
//     const newList = document.createElement("li");
//     newList.innerText = newTaskDescription.value;

//     newToDo(newList);
//     event.target.reset();
//       }
//     )
//   }
// );
  
//   const newToDo = function(task) {
//     document.getElementById("tasks").appendChild(task);
//   };


// document.addEventListener("DOMContentLoaded", function() {
//   document.querySelector('form').addEventListener('submit', function() {
    
//   });
// });