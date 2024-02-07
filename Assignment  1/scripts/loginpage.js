function changeButton() {
    let signupBtn = document.getElementById('signupBtn');
    let signinBtn = document.getElementById('signinBtn');
    let nameField = document.getElementById('nameField');
    let title = document.getElementById('title');

    signinBtn.onclick = function() {
        nameField.style.maxHeight = "0";
        title.innerHTML = "Sign In";
        signupBtn.classList.add('disable');
        signinBtn.classList.remove('disable');

    };

    signupBtn.onclick = function() {
        nameField.style.maxHeight = "60px";
        title.innerHTML = "Sign Up";
        signupBtn.classList.remove('disable');
        signinBtn.classList.add('disable');
    };
}

let registeredUsers = [];

function displayValidationMessage(message, isSuccess) {
    const validationMessage = document.getElementById('signupMessage');
    validationMessage.innerHTML = message;
    validationMessage.style.color = isSuccess ? 'green' : 'red';
}

function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    if (name && email && password) {
        // Validate if the user with the same email already exists
        const existingUser = registeredUsers.find(u => u.email === email);

        if (existingUser) {
            displayValidationMessage('User with this email already exists. Please use a different email.', false);
        } else {
            registeredUsers.push({ name, email, password });
            displayValidationMessage('User registered successfully!', true);
        }
    } else {
        displayValidationMessage('Please fill in all fields.', false);
    }
}

function signin() {
    const signinEmail = document.getElementById('signupEmail').value;
    const signinPassword = document.getElementById('signupPassword').value;

    if (signinEmail && signinPassword) {
        const user = registeredUsers.find(u => u.email === signinEmail && u.password === signinPassword);

        if (user) {
            displayValidationMessage(`Welcome, ${user.name}!`, true);
        } else {
            displayValidationMessage('Invalid email or password. Please try again.', false);
        }
    } else {
        displayValidationMessage('Please fill in all fields.', false);
    }
}
