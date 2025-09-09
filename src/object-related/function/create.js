class Create {
    createDiv(name) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(name);

        return newDiv;
    }
}

const createElement = new Create();

export default createElement;