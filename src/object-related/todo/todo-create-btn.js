export default class CreateTodoButton {
    constructor(createBtn) {
        this.createBtn = createBtn;
    }

    addFunction(projectName, lowerDiv, createCallBack) {
        this.createBtn.addEventListener("click", () => {
            createCallBack({
                projectName,
                lowerDiv,
                title: "hello",
                description: "something",
                dueDate: "01/12/2024",
                priority: "high",
            });
        });
    }
}