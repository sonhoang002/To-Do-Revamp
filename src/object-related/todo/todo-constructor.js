import todoService from "./todo-service";
import todoUIController from "./todo-ui-controller";
import TodoList from "../../DOM-related/todo/todo-list-creation";
import TodoStorage from "./todo-storage";

class ToDoConstructor {
    constructor() {
        const list = new TodoList();
        const service = new todoService();
        const todoStorage = new TodoStorage();
        this.controller = new todoUIController(list, service, todoStorage);
    }

    recallOrRender(projectDiv, projectTodoContainer) {
        this.controller.recall(projectDiv.textContent, projectTodoContainer);
    }
}

const toDoConstructor = new ToDoConstructor();

export default toDoConstructor;