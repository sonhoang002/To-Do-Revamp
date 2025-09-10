export default class AddingTodoBtn {
    constructor(formContainer) {
        this.formContainer = formContainer;
        this.textInput = document.querySelector(".text-input-todo");
        this.todoDescription = document.querySelector(".text-description-todo");
        this.todoDate = document.querySelector(".todo-date");
        this.todoPriority = document.querySelector("#todo-priority");
    }

    activateForm() {
        this.formContainer.classList.remove("inactive");
        setTimeout(() => {
            this.textInput.focus();
        }, 0);
    }

    deactivateForm() {
        this.formContainer.classList.add("inactive");
        this.textInput.value = "";
        this.todoDescription.value = "";
        this.todoDate.value = "";
        this.todoPriority.value = "";
    }
}