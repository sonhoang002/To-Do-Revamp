import projectConstructor from "../project/project-constructor";
import AddingProjectBtn from "../../DOM-related/adding-project-btn";

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
            projectConstructor.create({
                name : textInput.value
            })

            this.addingProjectBtn.deactivateForm();
        })
    }
}