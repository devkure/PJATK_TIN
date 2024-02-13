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

    resetErrors({firstNameInput, nickInput, lastNameInput, roleInput, emailInput}, {erroFirstName, errorNick, errorLastName, errorRole, errorEmail}, errorsSummary);

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

    if (!valid) {
        errorsSummary.innerText = "Formularz zawiera błędy";
    }
}