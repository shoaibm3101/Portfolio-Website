const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    if (checkInputs()){
        form.submit();
    }
});
 
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const checkValidEmail = email =>{
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
}


const checkInputs = () => {
    let isValid = true;

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageInputValue = messageInput.value.trim();

    if (nameValue === ''){
        setError(name, "Name is Required");
        isValid = false;
    }
    else{
        setSuccess(name);
    }

    if (emailValue === ''){
        setError(email, 'Email is Required');
        isValid = false;
    }
    else if (!checkValidEmail(emailValue)){
        setError(email, 'Send a Proper Email');
        isValid = false;
    }
    else{
        setSuccess(email);
    }

    if (messageInputValue === ''){
        setError(messageInput, 'A Message is Required');
        isValid = false;
    }
    else{
        setSuccess(messageInput);
    }

    return isValid
};

