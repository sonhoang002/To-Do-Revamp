import ProjectBtnFunction from "./project-btn-function";

export default class ProjectUIController {
    constructor(projectList, projectService) {
        this.list = projectList;
        this.service = projectService;
    }

    addProject(name) {
        if (this.service.checkProject(name)) {
            alert("Already Exist");
            return;
        }
        this.service.addProject(name)
        const {projectDiv, removeBtn} = this.list.addProject(name);

        removeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            this.service.removeProject(name);
            this.list.removeProject(projectDiv);
        });

        const projectBtnFunction = new ProjectBtnFunction(projectDiv);
        projectBtnFunction.renderTodoOfProject();
    }
}