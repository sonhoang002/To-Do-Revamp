class ToDoAndProjectManagement {
    constructor() {
        this.saveToDo = [];
        this.saveProject = [];
    }

    addToDo(toDoObject) {
        this.saveToDo.push([toDoObject, toDoObject.id, toDoObject.title]);
    }

    addProject(projectObject) {
        this.saveProject.push([projectObject, projectObject.id, projectObject.title]);
        console.log(this.saveProject);
    }

    removeToDo(toDoObject) {
        if (this.saveToDo.some(subArray => subArray[1] === toDoObject.id)) {
            let index = this.saveToDo.findIndex(subArray => subArray[1] === toDoObject.id);
            if (index !== -1) {
                this.saveToDo.splice(index, 1);
            }
        }
    }

    removeProject(projectObject) {
        if (this.saveProject.some(subArray => subArray[1] === projectObject.id)) {
            let index = this.saveProject.findIndex(subArray => subArray[1] === projectObject.id);
            if (index !== -1) {
                this.saveProject.splice(index, 1);
            }
        }
    }

    getToDoObject(toDoName) {
        if (this.saveToDo.some(subArray => subArray[2] === toDoName)) {
            return this.saveToDo.find(subArray => subArray[2] === toDoName)[0];
        }
    }

    getProjectObject(projectName) {
        if (this.saveProject.some(subArray => subArray[2] === projectName)) {
            return this.saveProject.find(subArray => subArray[2] === projectName)[0];
        }
    }
}

const TAPManagement = new ToDoAndProjectManagement();

export default TAPManagement;