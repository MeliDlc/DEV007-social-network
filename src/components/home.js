export const home = (onNavigate) => {
  const homeDiv = document.createElement('div');
  const buttonRegister = document.createElement('button');

  buttonRegister.textContent = 'Registrate';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  homeDiv.appendChild(buttonRegister);

  return homeDiv;
};