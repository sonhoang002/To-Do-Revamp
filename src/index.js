import "./css/general-layout.css";
import "./css/add-project-and-todo.css";
import "./css/project.css";
import "./css/todo.css";
import toDoCreation from "./object-related/todo-constructor.js";
import projectConstructor from "./object-related/project-constructor.js";
import AddingProject from "./object-related/function/adding-btn.js";

const addProjectBtn = document.querySelector(".add-project-btn");
const projectForm = document.querySelector(".project-form");

const formContainer = document.querySelector(".form-container");
const addingProject = new AddingProject(projectForm,formContainer, addProjectBtn);
addingProject.clickFunction();

projectConstructor.create({
    name : "hulla"
})