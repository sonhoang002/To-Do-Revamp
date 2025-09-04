import toDo from "./todo";
import TAPManagement from "./todo-and-project-management";
import TodoList from "../DOM-related/todo-list-creation";

class ToDoConstructor {
    create({title, description, dueDate, priority}) {
        const newTodo = new toDo(title, description, dueDate, priority);
        TAPManagement.addToDo(newTodo);
        const todoList = new TodoList();
        const newTodoDiv = todoList.addTodo(title);

    }

    remove(todoName) {
        const todoObject = TAPManagement.getToDoObject(todoName);
        TAPManagement.removeToDo(todoObject);
    }
}

const toDoConstructor = new ToDoConstructor();

export default toDoConstructor;