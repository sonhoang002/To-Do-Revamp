import createElement from "../function/create";

export default class CreateTodoButton {
    constructor(createBtn) {
        this.createBtn = createBtn;
        this.todoFormContainer = document.querySelector("todo-form-container");
    }

    addFunction(projectName, lowerDiv, createCallBack) {
        this.createBtn.addEventListener("click", () => {
            


            createCallBack({
                projectName,
                lowerDiv,
                title: "hello",
                description: "something",
                dueDate: "01/12/2024",
                priority: "high",
            });
            // console.log(projectName);
        });
    }
}