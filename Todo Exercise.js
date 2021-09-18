const todoList = document.getElementById('todo-list');
const form = document.getElementById('add-todo');
const input = document.getElementById('todo');

//retrieve from localStorage
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  for (let i = 0; i < savedTodos.length; i++) {
      let newTodo = document.createElement('li');
      newTodo.innerText = savedTodos[i].task;
      newTodo.isCompleted = savedTodos[i].isCompleted ? true : false;
      if (newTodo.isCompleted) {
          newTodo.style.textDecoration = 'line-through';
      }
      todoList.appendChild(newTodo);
  }

form.addEventListener('submit', function (e) {
    e.preventDefault()

    const newTodo = document.createElement('li');
    const removeBtn = document.createElement('button');
    const checkbox = document.createElement("input");

    checkbox.setAttribute('type', 'checkbox')
    removeBtn.innerText = 'X';
    removeBtn.style.color = 'red';
    newTodo.innerText = input.value;
    newTodo.prepend(checkbox);
    newTodo.appendChild(removeBtn);
    input.value = '';
    todoList.appendChild(newTodo);

    savedTodos.push({ task: newTodo.innerText, isCompleted: false });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
})

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'BUTTON') {
        e.target.parentElement.remove()
    }
})

todoList.addEventListener('click', function (e) {
    if (e.target.tagName === 'INPUT') {
        e.target.parentElement.classList.toggle('strikethrough')
        e.target.parentElement.isCompleted = true;
    }
})

