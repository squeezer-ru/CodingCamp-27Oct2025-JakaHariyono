/// Local array to store todo items
let todos = [];

function validateForm(todo, date){
    if (todo.trim() === ''|| date.trim() === '') {
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
        // Add new todo into array
        todos.push({ task: todoInput, dueDate: todoDate, status: 'Completed', action:  'Done' });
        renderTodos();
    }
}

// /// Function to delete a todo item
function deleteTodo(index) {
    todos.splice(index); // Remove the item at index
    renderTodos(); // Refresh the list after deleting
}

/// Function to filter todo items using input text
/// Function to filter todo items using input text
function filterTodos() {
    const filterText = document.getElementById('filter-input').value.toLowerCase();

    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    // Filter todos based on text in task or status or due date
    const filteredTodos = todos.filter(todo => 
        todo.task.toLowerCase().includes(filterText) ||
        todo.status.toLowerCase().includes(filterText) ||
        todo.action.toLowerCase().includes(filterText) ||
        todo.dueDate.includes(filterText)
    );

    // If no todos exist after filtering, show message
    if (filteredTodos.length === 0) {
        todoList.innerHTML = `
            <tr id="no-task-row">
                <td colspan="4" class="text-center py-10 text-lg text-gray-400">
                    No tasks match "${filterText}"
                </td>
            </tr>
        `;
        return;
    }

    // Render filtered todos
    filteredTodos.forEach((todo, index) => {
        todoList.innerHTML += `
            <tr class="border-b border-[#26324d]">
                <td class="py-4 px-4">${todo.task}</td>
                <td class="py-4 px-4">${todo.dueDate}</td>
                <td class="py-4 px-4">${todo.status}</td>
                <td class="py-4 px-4">${todo.action}</td>
            </tr>
        `;
    });
}


/// Function to render todo items to the DOM
function renderTodos() {
    const todoList = document.getElementById('todo-list');

    // Clear current list
    todoList.innerHTML = '';

    // If no todos exist, show "No task found" message
    if (todos.length === 0) {
        todoList.innerHTML = `
            <tr id="no-task-row">
                <td colspan="4" class="text-center py-10 text-lg text-gray-400">No task found</td>
            </tr>
        `;
        return;
    }

    // Render each todo item into table rows
    todos.forEach((todo, index) => {
        todoList.innerHTML += `
            <tr class="border-b border-[#26324d]">
                <td class="py-4 px-4">${todo.task}</td>
                <td class="py-4 px-4">${todo.dueDate}</td>
                <td class="py-4 px-4">${todo.status}</td>
                <td class="py-4 px-4">${todo.action}</td>
            </tr>
        `;
    });
}
