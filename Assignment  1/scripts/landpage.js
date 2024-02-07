 function gotoPage() {
    const registerBtn = document.querySelector('.js-register-button');
    registerBtn.addEventListener('click', () => {

        window.open('form.html', '_blank');
    });


    const loginBtn = document.querySelector('.js-login-button');
    loginBtn.addEventListener('click', () => {

        window.open('login.html', '_blank');
    });
 }

 gotoPage();




