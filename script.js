const addButton = document.getElementById("addButton");
const newTodoInput = document.getElementById("newTodo");
const todoList = document.getElementById("todoList");

addButton.addEventListener("click", () => {
  const todoText = newTodoInput.value;
  if (todoText.trim() !== "") {
    const todoItem = document.createElement("li");
    todoItem.style.minWidth = "200px"; 
    const todoTextElement = document.createElement("span");
    todoTextElement.textContent = todoText;
    todoTextElement.style.marginRight = "5px";

    // Agregar botón para borrar el elemento
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(todoItem);
    });

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.addEventListener("click", () => {
      if (todoTextElement.style.textDecoration === "line-through") {
        todoTextElement.style.textDecoration = "";
        completeButton.textContent ="Complete";

        
      } else {
        todoTextElement.style.textDecoration = "line-through";
        completeButton.textContent ="Unmark";
      }
      
    });

    const importantButton = document.createElement("button");
    importantButton.textContent = "Mark as Important";
    importantButton.addEventListener("click", () => {
      if (todoTextElement.style.color === "red") {
        todoTextElement.style.color = "";
        importantButton.textContent = "Mark as Important";
      } else {
        todoTextElement.style.color = "red";
        importantButton.textContent = "Unmark";
      }
    });


    
    deleteButton.style.marginRight = "5px";
    completeButton.style.marginRight = "5px";
    importantButton.style.marginRight="5px";

    todoItem.appendChild(todoTextElement); 
    todoItem.appendChild(deleteButton);
    todoItem.appendChild(completeButton);
    todoItem.appendChild(importantButton);
    todoList.appendChild(todoItem);
    newTodoInput.value = "";
  }
});
