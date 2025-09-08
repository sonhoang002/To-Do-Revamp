export default class TodoStorage {
    constructor() {
        this.storage = new Map();
        this.valuesArrays = [[]];
    }

    store(projectName) {
        this.storage.set(projectName, []);
    }

    addTodoToStorage(projectName, toDoObject) {
        this.storage.get(projectName).push(toDoObject);
    }

    getStore(projectName) {
        return [...this.storage.keys()].find(item => item === projectName);
    }

    removeItem(projectName) {
        const removeItem = [...this.storage.keys()].find(item => item === projectName);
        this.storage.delete(removeItem);
    }
}