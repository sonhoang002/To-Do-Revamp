export default class AddingProjectBtn {
    constructor(formContainer) {
        this.formContainer = formContainer;
        this.textInput = document.querySelector(".text-input");
    }

    activateForm() {
        this.formContainer.classList.remove("inactive");
        setTimeout(() => {
            this.textInput.focus();
        }, 0);
    }

    deactivateForm() {
        this.formContainer.classList.add("inactive");
        this.textInput.value = "";
    }
}