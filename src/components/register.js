import { registrarUsuarioConCorreoYContraseña } from "../lib";

export const register = (onNavigate) => {
  const registerDiv = document.createElement('div');
  registerDiv.className = 'login-wrap';

  registerDiv.innerHTML += `
  <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" ><label for="tab-1" class="tab"><a href='/login'>Iniciar sesion</a></label>
      <input id="tab-2" type="radio" name="tab" class="sign-up" checked><label for="tab-2" class="tab" >Registrarse</label>
      <div class="login-form">
        <div class="sign-up-htm"> 
          <div class="group">
            <label for="user" class="label">Nombre</label>
            <input id="user" type="text" class="input">
          </div>
          <div class="group">
            <label for="pass" class="label">Correo Electronico</label>
            <input id="input-correo" type="text" class="input">
          </div>
          <div class="group">
            <label for="pass" class="label">Contraseña</label>
            <input id="input-contraseña" type="password" class="input" data-type="password">
          </div>
          <div class="group">
            <label for="pass" class="label">Repetir Contraseña</label>
            <input id="input-repetirContra" type="password" class="input" data-type="password">
          </div>
          <div class="group">
            <input type="submit" id="btnRegister" class="button" value="Registrase">
          </div>
          <div class="hr"></div>
          <div class="group">
            <button class="google-btn">
              <span class="icon"></span>
              Registrate con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  const registerButton = registerDiv.querySelector('#btnRegister');

  /*const usuario = registerDiv.querySelector('#user');*/
  const inputCorreo = registerDiv.querySelector('#input-correo');
  const inputContraseña = registerDiv.querySelector('#input-contraseña');
  /*const inputPasswordAgain = registerDiv.querySelector('#input-repetirContra');*/

  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    registrarUsuarioConCorreoYContraseña(
      inputCorreo.value,
      inputContraseña.value,
    ).then(() => {
      alert("Usuario registrado correctamente.");
      onNavigate('/pagina');
    });
  });

  return registerDiv;
};
