import toDoConstructor from "../todo/todo-constructor";

export default class ProjectBtnFunction {
    constructor(projectDiv) {
        this.projectDiv = projectDiv;
        this.projectTodoContainer = document.querySelector(".project-todo-container");
    }

    renderTodoOfProject() {
        // Render the ToDo of each Project
        this.projectDiv.addEventListener("click", () => {
            toDoConstructor.recallOrRender(this.projectDiv, this.projectTodoContainer);
        }); 
    }
}