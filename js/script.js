/// Local array to store todo items

function validateForm(todo, date){
    if (todo.trim() === ''|| date.trim() === '') {
        // alert('Todo item cannot be empty.');
        return false;
    }
    return true;
}
 


/// Function to add a new todo item
function addTodo() {
    const todoInput = document.getElementById('todo-input').value;
    const todoDate = document.getElementById('todo-date').value;

    if (!validateForm(todoInput, todoDate)) {
        alert('Form validation failed. Please check your inputs.');
    } else {
        // Add to local array
        todos.push({ task: todoInput, dueDate: todoDate });

        renderTodos();
    }
}

/// Placeholder function for future feature
function deleteTodo() {

}

/// Placeholder functions for future features
function filterTodo() {

}

/// Function to render todo items to the DOM
function renderTodos() {

}