import AddingProjectBtn from "../../../DOM-related/project/adding-project-btn.js";
import FormSubmit from "./form-submit-project.js"

export default class AddingProject {
    constructor(projectForm, formContainer, addingBtn) {
        this.projectForm = projectForm;
        this.formContainer = formContainer;
        this.addingBtn = addingBtn;
        this.addingProjectBtn = new AddingProjectBtn(this.formContainer);
    }

    clickFunction() {
        this.addingBtn.addEventListener("click", () => {
            this.addingProjectBtn.activateForm();
        });
        this.formContainer.addEventListener("click", (e) => {
            if (e.target === this.formContainer) {
                this.addingProjectBtn.deactivateForm();
            }
        })

        const formSubmit = new FormSubmit(this.projectForm, this.formContainer, this.addingProjectBtn);
        formSubmit.addFormSubmitLogic();
    }
}