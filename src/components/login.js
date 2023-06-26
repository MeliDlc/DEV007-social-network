import { crearUsuarioConCorreoYContraseña } from "../lib";

export const login = (onNavigate) => {
    const loginDiv = document.createElement('div');
    loginDiv.className = 'login-wrap';

    const loginHtmlDiv = document.createElement('div');
    loginHtmlDiv.className = 'login-html';

    //Crea el input de inicio de sesion (sign in)
    const signInInput = document.createElement('input');
    signInInput.id = 'tab-1';
    signInInput.type = 'radio';
    signInInput.name = 'tab';
    signInInput.className = 'sign-in';
    signInInput.checked = true;
    signInInput.value = 'iniciar-sesion';

    //Forma de letra de Inicio de Sesion y cambio swicht
    const signInLabel = document.createElement('label');
    signInLabel.htmlFor = 'tab-1';
    signInLabel.className = 'tab';
    signInLabel.textContent = 'Iniciar sesión';

    //Crea el input de registrarse (sign in)
    const signUpInput = document.createElement('input');
    signUpInput.id = 'tab-2';
    signUpInput.type = 'radio';
    signUpInput.name = 'tab';
    signUpInput.className = 'sign-up';
    signUpInput.value = 'registrarse';

    //Forma de letra de Registro y cambio swicht
    const signUpLabel = document.createElement('label');
    signUpLabel.htmlFor = 'tab-2';
    signUpLabel.className = 'tab';
    signUpLabel.textContent = 'Registrarse';
    signUpLabel.addEventListener('click', () => {
        onNavigate('/register');
    });

    const loginFormDiv = document.createElement('div');
    loginFormDiv.className = 'login-form';
    const signInDiv = document.createElement('div');
    signInDiv.className = 'sign-in-htm';

    const welcomeLabel = document.createElement('label');
    welcomeLabel.htmlFor = 'user';
    welcomeLabel.className = 'label';
    welcomeLabel.textContent = 'Bienvenido al Login'; //quitar

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Correo electrónico';
    emailInput.id = 'input-email'; // id de correo electronico

    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.name = 'password';
    passwordInput.placeholder = 'Contraseña';
    passwordInput.id = 'input-password'; // id de contraseña

    const loginButton = document.createElement('button');
    loginButton.textContent = 'Iniciar sesión';
    loginButton.className = 'button';

    const googleButton = document.createElement('button');
    googleButton.textContent = 'Iniciar sesión con Google';
    googleButton.className = 'button-google';

    const homeButtonDiv = document.createElement('div');
    homeButtonDiv.className = 'group';


    const homeButton = document.createElement('button');
    homeButton.textContent = 'Regresar al Home';

    homeButton.addEventListener('click', () => onNavigate('/'));

    homeButtonDiv.appendChild(homeButton);
    signInDiv.appendChild(welcomeLabel);
    signInDiv.appendChild(emailInput);
    signInDiv.appendChild(passwordInput);
    signInDiv.appendChild(loginButton);
    signInDiv.appendChild(googleButton);
    signInDiv.appendChild(homeButtonDiv);
    loginFormDiv.appendChild(signInDiv);
    loginHtmlDiv.appendChild(signInInput);
    loginHtmlDiv.appendChild(signInLabel);
    loginHtmlDiv.appendChild(signUpInput);
    loginHtmlDiv.appendChild(signUpLabel);
    loginHtmlDiv.appendChild(loginFormDiv);
    loginDiv.appendChild(loginHtmlDiv);

    const inputEmail = loginDiv.querySelector('#input-email');
    const inputPassword = loginDiv.querySelector('#input-password');

    loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        crearUsuarioConCorreoYContraseña(
            inputEmail.value,
            inputPassword.value
        ).then(() => {
            onNavigate('/pagina');
        });
    });

    return loginDiv;
};
