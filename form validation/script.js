const form = document.getElementById("formm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const passward = document.getElementById("passward");
const cpassward = document.getElementById("confermpass");
const submit = document.getElementById("btn");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    validInputs();
})
const validInputs = () => {
    const valusername = username.value.trim();
    const valemail = email.value.trim();
    const valpass = passward.value.trim();
    const valcpass = cpassward.value.trim();

    if (valusername === '') {
        setError(username, "User name is required");
    }
    else {
        setSuccuss(username);
    }
    if (valusername.length > 20) {
        setError(username, "Enter small user name");
    }

    if (valusername.length < 5) {
        setError(username, "Enter big user name");
    }
    if (valpass === '') {
        setError(passward, "Enter passward");
    }
    else {
        setSuccuss(passward);
    }
    if (valcpass === '') {
        setError(cpassward, "Enter confirm passward");
    }
    else if (valcpass !== valpass) {
        setError(cpassward, "Passward dosen't match");
    }
    else {
        setSuccuss(cpassward);
    }
    if (valemail === '') {
        setError(email, "Enter email");
    }
    else if (!isvalidEmail(valemail)) {
        setError(email, "Enter valid Email");
    }
    else {
        setSuccuss(email);
    }
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");
    errorDisplay.innerText = message;
    inputControl.querySelector("input").style.border = "2px solid red";
}
const setSuccuss = (element) => {
    const inputControl = element.parentElement;
    const inputDisplay = inputControl.querySelector("input").innerText = element;
    const hideerro = inputControl.querySelector(".error");
    hideerro.innerText = "";
    const inputborder = inputControl.querySelector("input");
    inputborder.style.border = "2px solid green";
}
function isvalidEmail(e) {
    var reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return reg.test(e);
}
