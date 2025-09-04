import projectConstructor from "../object-related/project-constructor";

class ProjectList {
    constructor() {
        this.projectContainer = document.querySelector(".project-container");
    }

    addProject(projectName) {
        const newProjectDiv = document.createElement("div");
        const removeBtn = document.createElement("button");
        
        newProjectDiv.classList.add("new-project-div", projectName);
        newProjectDiv.textContent = projectName;

        removeBtn.classList.add("remove-btn");
        newProjectDiv.appendChild(removeBtn);
        this.projectContainer.appendChild(newProjectDiv);

        this.removeProject(newProjectDiv, removeBtn);

        // Testing
        return newProjectDiv;
    }

    removeProject(projectDiv, removeBtn) {
        removeBtn.addEventListener("click", () => {
            this.projectContainer.removeChild(projectDiv);
            projectConstructor.remove(projectDiv.textContent);
        });
    }
}

const projectList = new ProjectList();

export default projectList;

