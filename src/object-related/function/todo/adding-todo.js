import AddingTodoBtn from "../../../DOM-related/todo/adding-todo-btn";
import FormSubmitTodo from "./form-submit-todo";

export default class AddingTodo {
    constructor(addingBtn) {
        this.todoForm = document.querySelector(".todo-form");
        this.formContainer = document.querySelector(".todo-form-container");
        this.addingBtn = addingBtn;
        this.addingTodoBtn = new AddingTodoBtn(this.formContainer);

        this.formSubmitTodo = new FormSubmitTodo(this.todoForm, this.formContainer, this.addingTodoBtn);
    }

    clickFunction(createCallBack) {
        this.addingTodoBtn.activateForm();

        this.formContainer.addEventListener("click", (e) => {
            if (e.target === this.formContainer) {
                this.addingTodoBtn.deactivateForm();
            }
        })

        this.formSubmitTodo.addFormSubmitLogic(createCallBack);
    }
}