import Project from "./project";
import TAPManagement from "./todo-and-project-management";
import projectList from "../DOM-related/project-list-creation";

// Testing
import ProjectBtnFunction from "./function/project-btn-function.js";

class ProjectConstructor{
    create({name}) {
        const newProject = new Project(name);
        TAPManagement.addProject(newProject);
        const projectDiv = projectList.addProject(name);

        const projectBtnFunction = new ProjectBtnFunction(projectDiv);
        projectBtnFunction.renderTodoOfProject();
    }

    remove(projectName) {
        const projectObject = TAPManagement.getProjectObject(projectName);
        TAPManagement.removeProject(projectObject);
    }
}

const projectConstructor = new ProjectConstructor();

export default projectConstructor;