let contactPage = function(){

    let content = document.querySelector("#content");

    let header = document.createElement("h1");
    header.textContent = "CONTACT US";
    header.classList.add("form-header");
    content.appendChild(header);

    let form = document.createElement("FORM");
    form.classList.add("form");
    form.method = "post";
    
        let formOne = document.createElement("p");
            let formOneLabel = document.createElement("label");
            formOneLabel.for = "name";
            formOneLabel.textContent = "Name:";
            let formOneInput = document.createElement("input");
            formOneInput.type = "text";
            formOneInput.id = "name";
            formOneInput.name = "user_name";

            formOne.appendChild(formOneLabel);
            formOne.appendChild(formOneInput);

        form.appendChild(formOne);

        let formTwo = document.createElement("p");
            let formTwoLabel = document.createElement("label");
            formTwoLabel.for = "mail";
            formTwoLabel.textContent = "Email:";
            let formTwoInput = document.createElement("input");
            formTwoInput.type = "email";
            formTwoInput.id = "mail";
            formTwoInput.name = "user_email";

            formTwo.appendChild(formTwoLabel);
            formTwo.appendChild(formTwoInput);

        form.appendChild(formTwo);

        let formThree = document.createElement("p");
            let formThreeLabel = document.createElement("label");
            formThreeLabel.for = "msg";
            formThreeLabel.textContent = "Message:";
            let formThreeInput = document.createElement("textarea");
            formThreeInput.id = "msg";
            formThreeInput.name = "user_message";

            formThree.appendChild(formThreeLabel);
            formThree.appendChild(formThreeInput);

        form.appendChild(formThree);

        let formButton = document.createElement("p");
            let btn = document.createElement("button");
            btn.type = "submit";
            btn.textContent = "Send Your Message";

            formButton.appendChild(btn);
        form.appendChild(formButton);

    content.appendChild(form);

};

export {contactPage};