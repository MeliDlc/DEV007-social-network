import { agregarUnNuevoPost, borrarPost, editarPost } from '../lib';
import { auth,db } from '../firebase';
import { updateDoc, doc } from "firebase/firestore";

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
                .then((docRef) => {
                    console.log('publicación exitosa');
                    renderizarPost(contenidoDelTextarea.value, auth.currentUser.email, new Date(), docRef.id);
                    contenidoDelTextarea.value = '';
                });
        });

        const renderizarPost = (contenido, usuario, datetime, postId) => {
          const postsContainer = document.getElementById('postsContainer');
      
          const postDiv = document.createElement('div');
          postDiv.className = 'posts__post';
      
          const contenidoP = document.createElement('p');
          contenidoP.textContent = contenido;
      
          const usuarioH6 = document.createElement('h6');
          usuarioH6.textContent = usuario;
      
          const datetimeP = document.createElement('p');
          datetimeP.textContent = datetime.toString();
      
          const editarButton = document.createElement('button');
          editarButton.textContent = 'Editar';
          editarButton.addEventListener('click', () => {
            editarPostUI(postId, contenidoP, editarButton);
          });
      
          const borrarButton = document.createElement('button');
          borrarButton.textContent = 'Borrar';
          borrarButton.addEventListener('click', () => {
            borrarPost(postId);
            postDiv.remove();
          });
      
          postDiv.appendChild(contenidoP);
          postDiv.appendChild(usuarioH6);
          postDiv.appendChild(datetimeP);
          postDiv.appendChild(editarButton);
          postDiv.appendChild(borrarButton);
      
          postsContainer.appendChild(postDiv);
        };
      
        const editarPostUI = (postId, contenidoP, editarButton) => {
          const contenidoOriginal = contenidoP.textContent;
      
          const textarea = document.createElement('textarea');
          textarea.value = contenidoOriginal;
      
          const guardarButton = document.createElement('button');
          guardarButton.textContent = 'Guardar';
          guardarButton.addEventListener('click', () => {
            guardarCambios(postId, contenidoP, textarea, guardarButton, cancelarButton, editarButton, contenidoOriginal);
          });
      
          const cancelarButton = document.createElement('button');
          cancelarButton.textContent = 'Cancelar';
          cancelarButton.addEventListener('click', () => {
            eliminarElementosEdicion(postId, contenidoP, textarea, guardarButton, cancelarButton, editarButton, contenidoOriginal);
          });
      
          contenidoP.replaceWith(textarea);
          editarButton.replaceWith(guardarButton, cancelarButton);
        };
      
        const guardarCambios = (postId, contenidoP, textarea, guardarButton, cancelarButton, editarButton, contenidoOriginal) => {
          const nuevoContenido = textarea.value;
      
          editarPost(postId, nuevoContenido);
      
          // Verificar que cancelarButton sea un objeto válido antes de pasarlo como argumento
          if (cancelarButton && typeof cancelarButton.indexOf === 'function') {
            eliminarElementosEdicion(postId, contenidoP, textarea, guardarButton, cancelarButton, editarButton, contenidoOriginal);
          } else {
            console.log('El objeto cancelarButton no es válido.');
          }
        };
      
      

           const eliminarElementosEdicion = (postId, contenidoP, textarea, guardarButton, cancelarButton, editarButton, contenidoOriginal) => {
        if (contenidoOriginal === '') {
          borrarPost(postId);
        } else {
          textarea.replaceWith(contenidoP);
          guardarButton.replaceWith(editarButton);
          
          // Verificar que cancelarButton sea un objeto válido antes de intentar eliminarlo
          if (cancelarButton && cancelarButton.parentNode) {
            cancelarButton.parentNode.removeChild(cancelarButton);
          }
        }
      };
      
      

    PaginaDiv.appendChild(buttonHome);

    return PaginaDiv;
}
