import CreateTodoButton from "./todo-create-btn";
import showDetail from "../function/todo/show-todo-detail";

export default class todoUIController {
    constructor(todoList, todoService, todoStorage) {
        this.list = todoList;
        this.service = todoService;
        this.storage = todoStorage;
    }

    addTodo(projectName, container, name, description, dueDate, priority) {
        const newTodo = this.service.addTodo(name, description, dueDate, priority);
        const todoDiv = this.list.addTodo(container, name, dueDate, priority);

        showDetail.showTodoDetailLogic(todoDiv, name, description, dueDate, priority);

        if (this.storage.getStoreName(projectName) === undefined) {
            this.storage.store(projectName);
        }
        this.storage.addTodoToStorage(projectName, newTodo);
    }

    recall(projectName, projectTodoContainer) {
        if (this.storage.getStoreName(projectName) === undefined) {
            this.render(projectName, projectTodoContainer);
        } else {
            const storageValue = this.storage.getStoreValue(projectName);
            this.render(projectName, projectTodoContainer);
            this.list.recallTodo(projectTodoContainer, storageValue);
        }
    }

    render(projectName, projectTodoContainer) {
        const {createTodoBtn, lowerDiv} = this.list.renderTodo(projectTodoContainer);
        const createTodoButton = new CreateTodoButton(createTodoBtn);
        createTodoButton.addFunction(projectName, lowerDiv, (todoData) => {
            this.addTodo(
                todoData.projectName,
                todoData.lowerDiv,
                todoData.title,
                todoData.description,
                todoData.dueDate,
                todoData.priority,
            )
        });
    }
}