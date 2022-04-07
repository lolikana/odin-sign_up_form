
const submitBtn = document.getElementById("submit");

submitBtn.addEventListener('click', checkForm);

const checkInputs = document.querySelectorAll("input");

const checkPasswordOne = document.getElementById("password");
const checkPasswordTwo = document.getElementById("confirm-password");
const spanError = document.getElementById("span-error").classList;


function checkForm(event) {
    event.preventDefault();

    for (let checkInput of checkInputs) {
        console.log(checkInput.value.length);
        if (checkInput.value === "") {
            console.log("nope");
            checkInput.setAttribute("required", true);
            // break
        } else {
            checkInput.classList.add("valid");
            console.log("ok");
        }
    };

    checkPassword();
};

const checkPassword = () => {

    if ((checkPasswordOne.value.length < 8) 
            && (checkPasswordOne.value !== checkPasswordTwo.value)) 
    {
        console.log("password short & different");
        spanError.remove("pattern-password");
        spanError.add("pattern-password");
        checkPasswordOne.classList.add("invalid");
        checkPasswordTwo.classList.add("invalid");
    } 
    else if ((checkPasswordOne.value.length < 8) 
            && (checkPasswordOne.value === checkPasswordTwo.value)) 
    {
        console.log("password short & match");
        spanError.add("pattern-password");
        checkPasswordOne.classList.add("invalid");
        checkPasswordTwo.classList.remove("invalid");
        checkPasswordTwo.classList.add("valid");
    } 
    else if (checkPasswordOne.value !== checkPasswordTwo.value) 
    {
        console.log("password nope");
        spanError.remove("pattern-password");
        spanError.add("error-password");
        checkPasswordOne.classList.add("invalid");
        checkPasswordTwo.classList.add("invalid");
    } 
    else 
    {
        console.log("password ok");
        spanError.remove("error-password");
        spanError.remove("pattern-password");
        checkPasswordOne.classList.remove("invalid");
        checkPasswordTwo.classList.remove("invalid");
        checkPasswordOne.classList.add("valid");
        checkPasswordTwo.classList.add("valid");
    };
};
