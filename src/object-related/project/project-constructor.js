import Project from "./project.js";
import TAPManagement from "../todo-and-project-management.js";
import ProjectList from "../../DOM-related/project-list-creation.js";

// Testing
import ProjectBtnFunction from "./project-btn-function.js";
import ProjectService from "./project-service.js";
import ProjectUIController from "./project-ui-controller.js";


class ProjectConstructor{
    constructor() {
        const list = new ProjectList();
        const service = new ProjectService();
        this.controller = new ProjectUIController(list, service);
    }

    create(projectName) {
        this.controller.addProject(projectName);
    }
}

const projectConstructor = new ProjectConstructor();

export default projectConstructor;