import toDoConstructor from "../object-related/todo-constructor";

class TodoList {
    constructor() {
        this.todoContainer = document.querySelector(".lower-div");
    }   

    addTodo(todoName) {
        const newTodo = document.createElement("div");
        newTodo.textContent = todoName;

        this.todoContainer.appendChild(newTodo);

        return newTodo;
    }

    removeTodo() {

    }
}

export default TodoList;