function addTodo() {
    let todoInput = document.getElementById('newTodoInput');
    let todoText = todoInput.value;
    todoInput.value = '';
    let errorMessage = document.getElementById('error');

    if (todoText === '') {
        errorMessage.textContent = 'Please enter a todo item';
    } else {
        errorMessage.textContent = '';
        let newTodoItem = document.createElement('li');
        newTodoItem.textContent = todoText;
        let todoList = document.getElementById('todoList');
        todoList.appendChild(newTodoItem);
    }
}
