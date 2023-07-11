export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';

  homeDiv.innerHTML += `
  <div class="contenedorImg">
   <div class="image-circle">
      <img src="img/viajando.png" class="logo">
      </div>
      </div>
  `;

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'wrap';

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Inicia';
  buttonRegister.className = 'buttonHome';

  buttonRegister.addEventListener('click', () => onNavigate('/login'));
  homeDiv.appendChild(buttonRegister);
  homeDiv.appendChild(buttonContainer);

  return homeDiv;
};
