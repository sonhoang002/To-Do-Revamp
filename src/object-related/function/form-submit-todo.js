export default class FormSubmitTodo {
    constructor(todoForm, formContainer, addingTodoBtn) {
        this.todoForm = todoForm;
        this.formContainer = formContainer;
        this.addingTodoBtn = addingTodoBtn
    }

    addFormSubmitLogic(createCallBack) {
        this.todoForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const textInputTodo = document.querySelector(".text-input-todo");
            const todoDescription = document.querySelector(".text-description-todo");
            const todoDate = document.querySelector(".todo-date");
            const todoPriority = document.querySelector("#todo-priority");

            const data = {
                title: textInputTodo.value,
                description: todoDescription.value,
                dueDate: todoDate.value,
                priority: todoPriority.value
            };

            this.addingTodoBtn.deactivateForm();

            createCallBack(data);
        })
    }
}