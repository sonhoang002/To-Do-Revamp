import ProjectBtnFunction from "./project-btn-function";

export default class ProjectUIController {
    constructor(projectList, projectService) {
        this.list = projectList;
        this.service = projectService;
    }

    addProject(name) {
        this.service.addProject(name);
        const {projectDiv, removeBtn} = this.list.addProject(name);

        removeBtn.addEventListener("click", () => {
            this.service.removeProject(name);
            this.list.removeProject(projectDiv);
        });

        const projectBtnFunction = new ProjectBtnFunction(projectDiv);
        projectBtnFunction.renderTodoOfProject();
    }
}