class ProjectList {
    constructor() {
        this.projectContainer = document.querySelector(".project-container");
    }

    addProject(projectName) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("new-project-div", projectName);
        projectDiv.textContent = projectName;

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-btn");

        projectDiv.appendChild(removeBtn);
        this.projectContainer.appendChild(projectDiv);

        return {projectDiv, removeBtn}
    }

    removeProject(projectDiv) {
        this.projectContainer.removeChild(projectDiv);
    }
}

export default ProjectList;

