class ToDoAndProjectManagement {
    constructor() {
        this.saveToDo = new Map();
        this.saveProject = new Map();
    }

    addToDo(toDoObject) {
        this.saveToDo.set(toDoObject.id, toDoObject);
    }

    addProject(projectObject) {
        this.saveProject.set(projectObject.id, projectObject);
    }

    removeToDo(toDoObject) {
        this.saveToDo.delete(toDoObject);
    }

    removeProject(projectObject) {
        this.saveProject.delete(projectObject);
    }

    getToDoObject(toDoName) {
        return [...this.saveToDo.values()].find(todo => todo.title === toDoName); 
    }

    getProjectObject(projectName) {
        return [...this.saveProject.values()].find(project => project.title === projectName);
    }

    testingPurpose() {
        return this.saveToDo;
    }
}

const TAPManagement = new ToDoAndProjectManagement();

export default TAPManagement;