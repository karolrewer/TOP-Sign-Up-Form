const email = document.querySelector("#user_email");
const phone = document.querySelector("#phone_number");
const password = document.querySelector("#user_password");
const confirmPassword = document.querySelector("#confirm_user_password");
const errorMessage = document.querySelector(".error-message");


const inputs = [email,phone,password,confirmPassword];

inputs.forEach((item) => {
    item.addEventListener('focusin', () => {
        errorMessage.textContent = '';
        item.classList.remove('error');
        if (item == password || item == confirmPassword) {
            password.classList.remove('error');
            confirmPassword.classList.remove('error');
        }
    });
});

const submit = (e) => {
    e.preventDefault();
    if (password.value !== confirmPassword.value){
        password.classList.add('error');
        confirmPassword.classList.add('error');
        errorMessage.textContent = "* Passwords don't match";
        return;
    };
    if (!phone.value.match(/^\d{9}$/)) {
        phone.classList.add('error');
        errorMessage.textContent = "* Phone number should be 9 digits long";
        return;
    };
    if (password.value.length < 8) {
        password.classList.add('error');
        errorMessage.textContent = "* Password needs to be at least 8 chars. long.";
        return;
    };
    if (!password.value.match(/[a-z]/)) {
        password.classList.add('error');
        errorMessage.textContent = "* Password needs to have at least 1 lower case letter.";
        return;
    };
    if (!password.value.match(/[A-Z]/)) {
        password.classList.add('error');
        errorMessage.textContent = "* Password needs to have at least 1 upper case letter.";
        return;
    };
    if (!password.value.match(/\d+/g)) {
        password.classList.add('error');
        errorMessage.textContent = "* Password needs to have at least 1 number.";
        return;
    };
    alert("Form added successfully. Auto-refresh in 3 seconds.");
    setTimeout(() => {
        window.location.reload();
    }, 3000)

};

const form = document.querySelector('form');
form.addEventListener('submit', submit);
