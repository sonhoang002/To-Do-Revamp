import createElement from "../function/create";
import AddingTodo from "../function/adding-todo";

export default class CreateTodoButton {
    constructor(createBtn) {
        this.createBtn = createBtn;
        this.todoFormContainer = document.querySelector("todo-form-container");
    }

    addFunction(projectName, lowerDiv, createCallBack) {
        this.createBtn.addEventListener("click", () => {
            console.log("addFunction");
            const addingTodo = new AddingTodo(this.createBtn);
            addingTodo.clickFunction();

            // createCallBack({
            //     projectName,
            //     lowerDiv,
            //     title: "hello",
            //     description: "something",
            //     dueDate: "01/12/2024",
            //     priority: "high",
            // });
            // console.log(projectName);
        });
    }
}