const todoInput=document.getElementById("todoInput");
const todoButton = document.getElementById("add-todo");
const todoList = document.getElementById("todoList");  


todoButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTodo();
  }
}); 

function addTodo() {
  const todoText = todoInput.value.trim(); // Get the value of the input field and trim whitespace
  if (todoText === "") {
    alert("Please enter a task."); // Alert if the input is empty
    return;
  }
  const todoItem = document.createElement("li"); // Create a new list item  
  todoItem.textContent = todoText; // Set the text of the list item to the input value
  todoItem.classList.add("todo-item"); // Add a class to the list item for styling
  todoList.appendChild(todoItem); // Append the list item to the todo list
  todoInput.value = ""; // Clear the input field after adding the todo  
}
