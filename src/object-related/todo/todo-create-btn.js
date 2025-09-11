import createElement from "../function/create";
import AddingTodo from "../function/todo/adding-todo";

export default class CreateTodoButton {
    constructor(createBtn) {
        this.createBtn = createBtn;
        this.todoFormContainer = document.querySelector("todo-form-container");
    }

    addFunction(projectName, lowerDiv, createCallBack) {
        this.createBtn.addEventListener("click", () => {
            const addingTodo = new AddingTodo(this.createBtn);
            addingTodo.clickFunction(({ title, description, dueDate, priority }) => {
                createCallBack({
                    projectName,
                    lowerDiv,
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    priority: priority,
                });
                console.log(projectName)
            });
        });
    }
}