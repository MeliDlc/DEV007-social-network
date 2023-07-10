import { home } from './components/home';
import { register } from './components/register';
import { login } from './components/login';
import { pagina } from './components/pagina';

const rootDiv = document.getElementById('root');

const routes = {
  '/': home,
  '/register': register,
  '/login': login,
  '/pagina': pagina,
};

export const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(routes[pathname](onNavigate));
};

const component = routes[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[window.location.pathname](onNavigate));
};

rootDiv.appendChild(component(onNavigate));
