import projectConstructor from "../project/project-constructor";
import AddingProjectBtn from "../../DOM-related/project/adding-project-btn";

export default class FormSubmit {
    constructor(projectForm, formContainer) {
        this.projectForm = projectForm;
        this.formContainer = formContainer;
        this.addingProjectBtn = new AddingProjectBtn(formContainer);
    }

    addFormSubmitLogic() {
        this.projectForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const textInput = document.querySelector(".text-input");
            projectConstructor.create(textInput.value)

            this.addingProjectBtn.deactivateForm();
        })
    }
}