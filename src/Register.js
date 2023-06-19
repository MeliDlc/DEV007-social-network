

export const Register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'login-wrap';
  //<div class="login-wrap">

  const loginHtmlDiv = document.createElement('div');
  loginHtmlDiv.className = 'login-html';
  //<div class="login-html">

  const signInInput = document.createElement('input');
  signInInput.id = 'tab-1';
  signInInput.type = 'radio';
  signInInput.name = 'tab';
  signInInput.className = 'sign-in';
  //<input id="tab-1" type="radio" name="tab" class="sign-in" checked>

  const signInLabel = document.createElement('label');
  signInLabel.htmlFor = 'tab-1';
  signInLabel.className = 'tab';
  signInLabel.textContent = 'Iniciar sesión';
  signInLabel.addEventListener('click',()=>{
    onNavigate('/login');
  })
  //<label for="tab-1" class="tab">Iniciar sesion</label>

  const signUpInput = document.createElement('input');
  signUpInput.id = 'tab-2';
  signUpInput.type = 'radio';
  signUpInput.name = 'tab';
  signUpInput.className = 'sign-up';
  signUpInput.checked = true;
  // <input id="tab-2" type="radio" name="tab" class="sign-up">

  const signUpLabel = document.createElement('label');
  signUpLabel.htmlFor = 'tab-2';
  signUpLabel.className = 'tab';
  signUpLabel.textContent = 'Registrarse';
  //<label for="tab-2" class="tab">Registrarse</label>

  const loginFormDiv = document.createElement('div');
  loginFormDiv.className = 'login-form';
  //<div class="login-form">


  const signUpDiv = document.createElement('div');
  signUpDiv.className = 'sign-up-htm';
  //<div class="sign-in-htm">

  const group1 = document.createElement('div');
  group1.className = 'group';
  //<div class="group">

  const nameLabel = document.createElement('label');
  nameLabel.htmlFor = 'user';
  nameLabel.className = 'label';
  nameLabel.textContent = 'Nombre';
  //<div class="sign-in-htm">

  const nameInput = document.createElement('input');
  nameInput.id = 'user';
  nameInput.type = 'text';
  nameInput.className = 'input';
  //<input id="user" type="text" class="input">

  const group2 = document.createElement('div');
  group2.className = 'group';
  //<div class="group">

  const passwordLabel = document.createElement('label');
  passwordLabel.htmlFor = 'pass';
  passwordLabel.className = 'label';
  passwordLabel.textContent = 'Contraseña';
  //<label for="pass" class="label">Contraseña</label>


  const passwordInput = document.createElement('input');
  passwordInput.id = 'pass';
  passwordInput.type = 'password';
  passwordInput.className = 'input';
  passwordInput.dataset.type = 'password';
  //<input id="pass" type="password" class="input" data-type="password">

  const repeatPasswordLabel = document.createElement('label');
  repeatPasswordLabel.htmlFor = 'pass';
  repeatPasswordLabel.className = 'label';
  repeatPasswordLabel.textContent = 'Repetir Contraseña';
  //<label for="pass" class="label">Repetir Contraseña</label>

  const repeatPasswordInput = document.createElement('input');
  repeatPasswordInput.id = 'pass';
  repeatPasswordInput.type = 'password';
  repeatPasswordInput.className = 'input';
  repeatPasswordInput.dataset.type = 'password';
  // <input id="pass" type="password" class="input" data-type="password">

  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = 'pass';
  emailLabel.className = 'label';
  emailLabel.textContent = 'Correo Electrónico';
  //<label for="pass" class="label">Correo Electronico</label>

  const emailInput = document.createElement('input');
  emailInput.id = 'pass';
  emailInput.type = 'text';
  emailInput.className = 'input';
  //<input id="pass" type="text" class="input">

  const signUpButtonDiv = document.createElement('div');
  signUpButtonDiv.className = 'group';
  //<div class="group">

  const signUpButton = document.createElement('input');
  signUpButton.type = 'submit';
  signUpButton.className = 'button';
  signUpButton.value = 'Sign Up';
  //<input type="submit" class="button" value="Sign Up">

  const hrDiv = document.createElement('div');
  hrDiv.className = 'hr';
  //<div class="hr"></div>

  const googleButtonDiv = document.createElement('div');
  googleButtonDiv.className = 'group';
  //<div class="group">

  const googleButton = document.createElement('button');
  googleButton.className = 'google-btn';
  googleButton.innerHTML = '<span class="icon"></span> Regístrate con Google';
  //<button class="google-btn"></button>

  signUpButtonDiv.appendChild(signUpButton);
  signUpDiv.appendChild(nameLabel);
  signUpDiv.appendChild(nameInput);
  signUpDiv.appendChild(passwordLabel);
  signUpDiv.appendChild(passwordInput);
  signUpDiv.appendChild(repeatPasswordLabel);
  signUpDiv.appendChild(repeatPasswordInput);
  signUpDiv.appendChild(emailLabel);
  signUpDiv.appendChild(emailInput);
  signUpDiv.appendChild(signUpButtonDiv);
  signUpDiv.appendChild(hrDiv);
  signUpDiv.appendChild(googleButtonDiv);
  loginFormDiv.appendChild(signUpDiv);
  loginHtmlDiv.appendChild(signInInput);
  loginHtmlDiv.appendChild(signInLabel);
  loginHtmlDiv.appendChild(signUpInput);
  loginHtmlDiv.appendChild(signUpLabel);
  loginHtmlDiv.appendChild(loginFormDiv);
  registerDiv.appendChild(loginHtmlDiv);

  return registerDiv;
};