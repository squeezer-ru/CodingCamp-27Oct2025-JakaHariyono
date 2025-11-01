/// Local array to store todo items
let todos = [];

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
        // Code to add todo item to the array and render it
        todos.push({ task: todoInput, duedate: todoDate });
        console.log('current todos:', todos);
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