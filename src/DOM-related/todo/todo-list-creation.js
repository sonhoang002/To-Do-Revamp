class TodoList {
    constructor() {

    }

    addTodo(container, todoName) {
        console.log(container);
        console.log(todoName);
        const newTodo = document.createElement("div");
        newTodo.textContent = todoName;

        container.appendChild(newTodo);

        return newTodo;
    }

    recallTodo(containerName, projectTodoContainer) {
        
    }

    renderTodo(projectTodoContainer) {
        while (projectTodoContainer.firstChild) {
            projectTodoContainer.removeChild(projectTodoContainer.firstChild);
        }
        console.log("here");
        const upperDiv = document.createElement("div");
        upperDiv.classList.add("upper-div");
        const lowerDiv = document.createElement("div");
        lowerDiv.classList.add("lower-div");

        const createTodoBtn = document.createElement("button");
        createTodoBtn.classList.add("create-todo-btn");
        createTodoBtn.textContent = "Create Todo!";

        upperDiv.appendChild(createTodoBtn);

        projectTodoContainer.append(upperDiv, lowerDiv);
        projectTodoContainer.classList.add("todo");

        return {createTodoBtn, lowerDiv};
    }

    // removeTodo(todoDiv) {
    //     this.todoContainer.removeChild(todoDiv);
    // }
}

export default TodoList;