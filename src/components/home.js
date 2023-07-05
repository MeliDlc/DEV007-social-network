export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'homeDiv';

  homeDiv.innerHTML+= `
  <div class="contenedorImg">
      <img src="img/viajando.png" class="logo">
  `;

  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Inicia';
  buttonRegister.className = 'botonInicio';

  buttonRegister.addEventListener('click', () => onNavigate('/login'));

  homeDiv.appendChild(buttonRegister);
  
  return homeDiv;
};