function addTodo() {
    let todoText = getTodoInputText();
    clearTodoInput();


    if (todoText === '') {
        showError('Please enter a todo item');
    } else {
        clearError();
        addTodoToList(todoText);
    }
}

function addTodoToList(todoText) {
    let newTodoItem = document.createElement('li');
    newTodoItem.textContent = todoText;
    let todoList = document.getElementById('todoList');
    todoList.appendChild(newTodoItem);
}

function getTodoInputText() {
    let todoInput = document.getElementById('newTodoInput');
    return todoInput.value.trim();
}
function clearTodoInput() {
    let todoInput = document.getElementById('newTodoInput');
    todoInput.value = '';
}

function showError(error) {
    let errorMessage = document.getElementById('error');
    errorMessage.textContent = error;
}

function clearError(error) {
    showError('');
}