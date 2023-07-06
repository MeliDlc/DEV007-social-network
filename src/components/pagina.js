import { agregarUnNuevoPost } from '../lib';
import { auth } from '../firebase';

export const pagina = (onNavigate) => {
    const PaginaDiv = document.createElement('div');
    PaginaDiv.textContent = "BIENVENIDO";
    PaginaDiv.className = 'pagina-div';

    const buttonHome = document.createElement('button');
    buttonHome.classList = 'pagina-div__button';
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    PaginaDiv.innerHTML += `
      <div class="new-post__container">
          <textarea class="new-post__container__textarea"></textarea>
          <button class="new-post__container__button">Publicar</button>
      </div>
    <section id="postsContainer" class="posts">
      <div class="posts__post"></div>
  </section>
    `;

    PaginaDiv.querySelector('.new-post__container__button').addEventListener(
        'click',
        () => {
            const contenidoDelTextarea = PaginaDiv.querySelector(
                '.new-post__container__textarea');
            agregarUnNuevoPost(contenidoDelTextarea.value)
                .then(() => {
                    console.log('publicación exitosa');
                    renderizarPost(contenidoDelTextarea.value, auth.currentUser.email, new Date());
                    contenidoDelTextarea.value = '';
                });
        });

    const renderizarPost = (contenido, usuario, datetime) => {
        const postsContainer = document.getElementById('postsContainer');

        const postDiv = document.createElement('div');
        postDiv.className = 'posts__post';

        const contenidoP = document.createElement('p');
        contenidoP.textContent = contenido;

        const usuarioH6 = document.createElement('h6');
        usuarioH6.textContent = usuario;

        const datetimeP = document.createElement('p');
        datetimeP.textContent = datetime.toString();

        /*const editarButton = document.createElement('button');
        editarButton.textContent = 'Editar';
        editarButton.addEventListener('click', () => {
            editarPost(contenidoP, editarButton);
        });*/

        postDiv.appendChild(contenidoP);
        postDiv.appendChild(usuarioH6);
        postDiv.appendChild(datetimeP);
        //postDiv.appendChild(editarButton);

        postsContainer.appendChild(postDiv);
    };
    

    /*const editarPost = (contenidoP, editarButton) => {
        const contenidoOriginal = contenidoP.textContent;

        const textarea = document.createElement('textarea');
        textarea.value = contenidoOriginal;

        const guardarButton = document.createElement('button');
        guardarButton.textContent = 'Guardar';
        guardarButton.addEventListener('click', () => {
            guardarCambios(contenidoP, textarea, guardarButton, contenidoOriginal);
        });

        const cancelarButton = document.createElement('button');
        cancelarButton.textContent = 'Cancelar';
        cancelarButton.addEventListener('click', () => {
            eliminarElementosEdicion(contenidoP, textarea, guardarButton, cancelarButton, contenidoOriginal);
        });

        contenidoP.replaceWith(textarea);
        editarButton.replaceWith(guardarButton, cancelarButton);
    };

    const guardarCambios = (contenidoP, textarea, guardarButton, contenidoOriginal) => {
        const nuevoContenido = textarea.value;

        contenidoP.textContent = nuevoContenido;
        eliminarElementosEdicion(contenidoP, textarea, guardarButton, cancelarButton, contenidoOriginal);
    };

    const eliminarElementosEdicion = (contenidoP, textarea, guardarButton, cancelarButton, contenidoOriginal) => {
        textarea.replaceWith(contenidoP);
        guardarButton.replaceWith(editarButton);
        cancelarButton.remove();
    };*/


    PaginaDiv.appendChild(buttonHome);

    return PaginaDiv;
}
