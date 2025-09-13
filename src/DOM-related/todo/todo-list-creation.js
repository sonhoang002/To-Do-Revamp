import createElement from "../../object-related/function/create";
import showDetail from "../../object-related/function/todo/show-todo-detail";

class TodoList {
    addTodo(container, name, dueDate, priority) {
        const newTodo = createElement.createDiv("new-todo");
        const todoName = createElement.createDiv("todo-name");
        const todoDueDate = createElement.createDiv("todo-due-date");

        todoName.textContent = name;
        todoDueDate.textContent = dueDate;
        if (priority === "1") {
            newTodo.style.backgroundColor = "green";
        } else if (priority === "2") {
            newTodo.style.backgroundColor = "yellow";
        } else {
            newTodo.style.backgroundColor = "red";
        }

        newTodo.append(todoName, todoDueDate);
        container.appendChild(newTodo);

        return newTodo;
    }

    // Already todo inside the project, that when you recall
    recallTodo(projectTodoContainer, storageValue) {
        while (projectTodoContainer.lastChild.firstChild) {
            projectTodoContainer.lastChild.removeChild(projectTodoContainer.lastChild.firstChild);
        }
        const lowerDiv = projectTodoContainer.lastChild;
        for (let i = 0; i < storageValue.length; i ++) {
            const newTodo = createElement.createDiv("new-todo");
            const todoName = createElement.createDiv("todo-name");
            const todoDueDate = createElement.createDiv("todo-due-date");

            todoName.textContent = storageValue[i].title;
            todoDueDate.textContent = storageValue[i].dueDate;
            if (storageValue[i].priority === "1") {
                newTodo.style.backgroundColor = "green";
            } else if (storageValue[i].priority === "2") {
                newTodo.style.backgroundColor = "yellow";
            } else {
                newTodo.style.backgroundColor = "red";
            }

            newTodo.append(todoName, todoDueDate);

            showDetail.showTodoDetailLogic(newTodo, storageValue[i].title, storageValue[i].description, storageValue[i].dueDate, storageValue[i].priority)

            lowerDiv.appendChild(newTodo);
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