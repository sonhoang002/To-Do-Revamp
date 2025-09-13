class ShowDetail {
    constructor() {
        this.todoUI = document.querySelector(".todo-UI");
        this.todoName = document.querySelector(".todo-div-name");
        this.todoDescription = document.querySelector(".todo-div-description");
        this.todoDueDate = document.querySelector(".todo-div-dueDate");
        this.todoPriority = document.querySelector(".todo-div-priority");
    }

    showTodoDetailLogic(todoDiv, name, description, dueDate, priority) {
        todoDiv.addEventListener("click", () => {
            this.todoUI.classList.remove("inactive");
            this.todoName.textContent = name;
            this.todoDescription.textContent = description;
            this.todoDueDate.textContent = dueDate;

            if (priority === "1") {
                this.todoPriority.textContent = "Low";
            } else if (priority === "2") {
                this.todoPriority.textContent = "Medium";
            } else {
                this.todoPriority.textContent = "High";
            }
        });

        this.todoUI.addEventListener("click", (e) => {
            if (e.target === this.todoUI) {
                this.todoUI.classList.add("inactive");
            }
        })
    }
}

const showDetail = new ShowDetail();

export default showDetail;