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

            // Revisit this, this is just a test
            // const upperDiv = document.createElement("div");
            // upperDiv.classList.add("upper-div");
            // const lowerDiv = document.createElement("div");
            // lowerDiv.classList.add("lower-div");

            // const createTodoBtn = document.createElement("button");
            // createTodoBtn.classList.add("create-todo-btn");
            // createTodoBtn.textContent = "Create Todo!";

            // createTodoBtn.addEventListener("click", () => {
            //     toDoConstructor.create({
            //         container: lowerDiv,
            //         title: "hello",
            //         description: "something",
            //         dueDate: "01/12/2024",
            //         priority: "high",
            //     })
            // });

            // upperDiv.appendChild(createTodoBtn);

            // this.projectTodoContainer.append(upperDiv, lowerDiv);
            // this.projectTodoContainer.classList.add("todo");
        });

        
    }
}