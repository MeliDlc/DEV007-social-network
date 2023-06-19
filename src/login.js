import { onNavigate } from "./main";


export const Login = (onNavigate) => {
    const loginDiv = document.createElement('div');
    loginDiv.className = 'login-wrap';
  
    const loginHtmlDiv = document.createElement('div');
    loginHtmlDiv.className = 'login-html';

    const signInInput = document.createElement('input');
    signInInput.id = 'tab-1';
    signInInput.type = 'radio';
    signInInput.name = 'tab';
    signInInput.className = 'sign-in';
    signInInput.checked = true;
  
    const signInLabel = document.createElement('label');
    signInLabel.htmlFor = 'tab-1';
    signInLabel.className = 'tab';
    signInLabel.textContent = 'Iniciar sesión';
  
    const signUpInput = document.createElement('input');
    signUpInput.id = 'tab-2';
    signUpInput.type = 'radio';
    signUpInput.name = 'tab';
    signUpInput.className = 'sign-up';
  
    const signUpLabel = document.createElement('label');
    signUpLabel.htmlFor = 'tab-2';
    signUpLabel.className = 'tab';
    signUpLabel.textContent = 'Registrarse';
    signInLabel.addEventListener('click',()=>{
      onNavigate('/register');
    })
  
    const loginFormDiv = document.createElement('div');
    loginFormDiv.className = 'login-form';
  
    const signInDiv = document.createElement('div');
    signInDiv.className = 'sign-in-htm';
  
    const welcomeLabel = document.createElement('label');
    welcomeLabel.htmlFor = 'user';
    welcomeLabel.className = 'label';
    welcomeLabel.textContent = 'Bienvenido al Login';
  
    const homeButtonDiv = document.createElement('div');
    homeButtonDiv.className = 'group';
  
    const homeButton = document.createElement('button');
    homeButton.textContent = 'Regresar al Home';
  
    homeButton.addEventListener('click', () => onNavigate('/'));
  
    homeButtonDiv.appendChild(homeButton);
    signInDiv.appendChild(welcomeLabel);
    signInDiv.appendChild(homeButtonDiv);
    loginFormDiv.appendChild(signInDiv);
    loginHtmlDiv.appendChild(signInInput);
    loginHtmlDiv.appendChild(signInLabel);
    loginHtmlDiv.appendChild(signUpInput);
    loginHtmlDiv.appendChild(signUpLabel);
    loginHtmlDiv.appendChild(loginFormDiv);
    loginDiv.appendChild(loginHtmlDiv);
  
    return loginDiv;
  };