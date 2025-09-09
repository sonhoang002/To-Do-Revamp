export default class FormSubmitTodo {
    constructor(todoForm, formContainer, addingTodoBtn) {
        this.todoForm = todoForm;
        this.formContainer = formContainer;
        this.addingTodoBtn = addingTodoBtn
    }

    addFormSubmitLogic() {
        this.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const textInput = document.querySelector(".text-input");
            projectConstructor.create(textInput.value);

            this.addingTodoBtn.deactivateForm();
        })
    }
}