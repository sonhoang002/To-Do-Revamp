class TodoList {
    addTodo(container, todoName) {
        const newTodo = document.createElement("div");
        newTodo.textContent = todoName;

        container.appendChild(newTodo);

        return newTodo;
    }

    // Already todo inside the project, that when you recall
    recallTodo(projectName, projectTodoContainer, storageValue) {
        while (projectTodoContainer.lastChild.firstChild) {
            projectTodoContainer.lastChild.removeChild(projectTodoContainer.lastChild.firstChild);
        }
        const lowerDiv = projectTodoContainer.lastChild;
        for (let i = 0; i < storageValue.length; i ++) {
            const newDiv = document.createElement("div");
            newDiv.textContent = storageValue[i].title;

            lowerDiv.appendChild(newDiv);
        }
        
    }

    // The project is empty
    renderTodo(projectTodoContainer) {
        while (projectTodoContainer.firstChild) {
            projectTodoContainer.removeChild(projectTodoContainer.firstChild);
        }
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