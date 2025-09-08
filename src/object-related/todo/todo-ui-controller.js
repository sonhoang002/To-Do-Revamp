import CreateTodoButton from "./todo-create-btn";

export default class todoUIController {
    constructor(todoList, todoService, todoStorage) {
        this.list = todoList;
        this.service = todoService;
        this.storage = todoStorage;
    }

    addTodo(projectName, container, name, description, dueDate, priority) {
        const newTodo = this.service.addTodo(name, description, dueDate, priority);
        const todoDiv = this.list.addTodo(container, name);
        console.log("here");

        if (this.storage.getStore(projectName) === undefined) {
            this.storage.store(projectName);
        }
        this.storage.addTodoToStorage(projectName, newTodo);
    }

    recall(projectName, projectTodoContainer) {
        if (this.storage.getStore(projectName) === undefined) {
            this.render(projectName, projectTodoContainer);
        }
        this.list.recallTodo(projectName, projectTodoContainer);
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