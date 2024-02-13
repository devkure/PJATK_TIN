function validateForm() {

    //employee

    //input
    const firstNameInput = document.getElementById('fname');
    const nickInput = document.getElementById('nick');
    const lastNameInput = document.getElementById('lname');
    const roleInput = document.getElementById('role');
    const emailInput = document.getElementById('email');

    //error
    const erroFirstName = document.getElementById('errorFirstName');
    const errorNick = document.getElementById('errorNick');
    const errorLastName = document.getElementById('errorLastName');
    const errorRole = document.getElementById('errorRole');
    const errorEmail = document.getElementById('errorEmail');

    //Task

    //input
    const taskInput = document.getElementById('task');
    const typeInput = document.getElementById('type');
    const descInput = document.getElementById('desc');
    const prioInput = document.getElementById('prio');
    const deadlineInput = document.getElementById('deadline');
    const statusInput = document.getElementById('status')

    //error
    const errorTask = document.getElementById('errorTask');
    const errorType = document.getElementById('errorType');
    const errorDesc = document.getElementById('errorDesc');
    const errorPrio = document.getElementById('errorPrio');
    const errorDeadline = document.getElementById('errorDeadline');
    const errorStatus = document.getElementById('errorStatus');

    resetErrors
    (
        {firstNameInput, nickInput, lastNameInput, roleInput, emailInput}, {erroFirstName, errorNick, errorLastName, errorRole, errorEmail}, 
        {taskInput, typeInput, descInput, prioInput, deadlineInput, statusInput}, {errorTask, errorType, errorDesc, errorPrio, errorDeadline, errorStatus},
        errorsSummary
    );

    let valid = true;

    //imie
    if (!checkRequired(firstNameInput.value)){
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(firstNameInput.value, 2, 60)) {
        valid = false;
        firstNameInput.classList.add("error-input");
        errorFirstName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //nick
    if (!checkRequired(nickInput.value)){
        valid = false;
        nickInput.classList.add("error-input");
        errorNick.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(nickInput.value, 2, 60)) {
        valid = false;
        nickInput.classList.add("error-input");
        errorNick.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //nazwisko
    if (!checkRequired(lastNameInput.value)){
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(lastNameInput.value, 2, 60)) {
        valid = false;
        lastNameInput.classList.add("error-input");
        errorLastName.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //rola
    if (!checkRequired(roleInput.value)){
        valid = false;
        roleInput.classList.add("error-input");
        errorRole.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(roleInput.value, 2, 60)) {
        valid = false;
        roleInput.classList.add("error-input");
        errorRole.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //email
    if (!checkRequired(emailInput.value)){
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(emailInput.value, 2, 60)) {
        valid = false;
        emailInput.classList.add("error-input");
        errorEmail.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    } 

    //task
    if (!checkRequired(taskInput.value)){
        valid = false;
        taskInput.classList.add("error-input");
        errorTask.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(taskInput.value, 2, 60)) {
        valid = false;
        taskInput.classList.add("error-input");
        errorTask.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //typ
    if (!checkRequired(typeInput.value)){
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(typeInput.value, 2, 60)) {
        valid = false;
        typeInput.classList.add("error-input");
        errorType.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //deskrypcja
    if (!checkRequired(descInput.value)){
        valid = false;
        descInput.classList.add("error-input");
        errorDesc.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(descInput.value, 0, 150)) {
        valid = false;
        descInput.classList.add("error-input");
        errorDesc.innerText = "Pole powinno zawierać max 150 znaków";
    }

    //prio
    if (!checkRequired(prioInput.value)){
        valid = false;
        prioInput.classList.add("error-input");
        errorPrio.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(prioInput.value, 2, 60)) {
        valid = false;
        prioInput.classList.add("error-input");
        errorPrio.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    }

    //deadline
    if (!checkRequired(deadlineInput.value)){
        valid = false;
        deadlineInput.classList.add("error-input");
        errorDeadline.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(deadlineInput.value, 2, 60)) {
        valid = false;
        deadlineInput.classList.add("error-input");
        errorDeadline.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    } else if (!checkDate(deadlineInput)) {
        valid = false;
        deadlineInput.classList.add("error-input");
        errorDeadline.innerText = "Pole powinno być w formacie YYYY-MM-DD";
    }

    //status
    if (!checkRequired(statusInput.value)){
        valid = false;
        statusInput.classList.add("error-input");
        errorStatus.innerText = "Pole jest wymagane";
    } else if (!checkTextLengthRange(statusInput.value, 2, 60)) {
        valid = false;
        statusInput.classList.add("error-input");
        errorStatus.innerText = "Pole powinno zawierać od 2 do 60 znaków";
    } 

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
}