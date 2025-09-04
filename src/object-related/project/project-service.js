import TAPManagement from "../todo-and-project-management";
import Project from "./project";

export default class ProjectService {
    addProject(name) {
        const newProject = new Project(name);
        TAPManagement.addProject(newProject);
    }

    removeProject(name) {
        const project = TAPManagement.getProjectObject(name);
        TAPManagement.removeProject(project);
    }
}