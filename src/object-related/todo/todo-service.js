import TAPManagement from "../todo-and-project-management";
import ToDo from "./todo";

export default class todoService {
    addTodo(name, description, dueDate, priority) {
        const newTodo = new ToDo(name, description, dueDate, priority);
        TAPManagement.addToDo(newTodo);
        return newTodo;
    }

    removeTodo(name) {
        const todo = TAPManagement.getToDoObject(name);
        TAPManagement.removeToDo(todo);
    }
}