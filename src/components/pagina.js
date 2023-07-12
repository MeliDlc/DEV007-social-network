/* eslint-disable */
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { agregarUnNuevoPost, borrarPost, editarPost } from '../lib';
import { db } from '../firebase';

export const pagina = (onNavigate) => {
  const PaginaDiv = document.createElement('div');
  PaginaDiv.textContent = "YA ES TIEMPO DE OTRA AVENTURA";

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
        '.new-post__container__textarea',
      );

      agregarUnNuevoPost(contenidoDelTextarea.value)
        .then(() => {
          contenidoDelTextarea.value = '';
        });
    },
  );

  const q = query(collection(db, "posts"), orderBy("datetime", "desc"));

  onSnapshot(q, (querySnapshot) => {
    const postsContainer = document.getElementById('postsContainer');
    postsContainer.innerHTML = ""; // Limpiar el contenedor de posts antes de agregar los nuevos

    querySnapshot.forEach((doc) => {
      const postDiv = document.createElement('div');
      postDiv.className = 'posts__post';

      const contenidoP = document.createElement('p');
      contenidoP.textContent = doc.data().contenido;

      const usuarioH6 = document.createElement('h6');
      usuarioH6.textContent = doc.data().usuario;

      const datetimeP = document.createElement('p');
      const datetime = new Date(doc.data().datetime.toMillis());
      datetimeP.textContent = datetime.toLocaleString();

      const editarButton = document.createElement('button');
      editarButton.textContent = 'Editar';
      editarButton.addEventListener('click', () => {
        editarPostUI(doc.id, contenidoP, editarButton);
      });

      const borrarButton = document.createElement('button');
      borrarButton.textContent = 'Borrar';
      borrarButton.addEventListener('click', () => {
        borrarPost(doc.id);

        postDiv.remove();
      });

      postDiv.appendChild(contenidoP);
      postDiv.appendChild(usuarioH6);
      postDiv.appendChild(datetimeP);
      postDiv.appendChild(editarButton);
      postDiv.appendChild(borrarButton);

      postsContainer.appendChild(postDiv);

      console.log(doc.data());
    });
  });

  const editarPostUI = (postId, contenidoP, editarButton) => {
    const contenidoOriginal = contenidoP.textContent;

    const textarea = document.createElement('textarea');
    textarea.value = contenidoOriginal;

    const guardarButton = document.createElement('button');
    guardarButton.textContent = 'Guardar';
    guardarButton.addEventListener('click', () => {
      guardarCambios(
        postId,
        contenidoP,
        textarea,
        guardarButton,
        cancelarButton,
        editarButton,
        contenidoOriginal,
      );
    });

    const cancelarButton = document.createElement('button');
    cancelarButton.textContent = 'Cancelar';
    cancelarButton.addEventListener('click', () => {
      eliminarElementosEdicion(
        postId,
        contenidoP,
        textarea,
        guardarButton,
        cancelarButton,
        editarButton,
        contenidoOriginal,
      );
    });

    contenidoP.replaceWith(textarea);
    editarButton.replaceWith(guardarButton, cancelarButton);
  };

  const guardarCambios = async (
    postId,
    contenidoP,
    textarea,
    guardarButton,
    cancelarButton,
    editarButton,
    contenidoOriginal,
    ) => {
    const nuevoContenido = textarea.value;
    await editarPost(postId, nuevoContenido);

    eliminarElementosEdicion(
      postId,
      contenidoP,
      textarea,
      guardarButton,
      cancelarButton,
      editarButton,
      contenidoOriginal,
   );
  };

  const eliminarElementosEdicion = (
    postId,
    contenidoP,
    textarea,
    guardarButton,
    cancelarButton,
    editarButton,
    contenidoOriginal,
    ) => {
    if (contenidoOriginal === '') {
      borrarPost(postId);
    } else {
      contenidoP.textContent = textarea.value;
      textarea.replaceWith(contenidoP);
      guardarButton.replaceWith(editarButton);

      if (cancelarButton && cancelarButton.parentNode) {
        cancelarButton.parentNode.removeChild(cancelarButton);
      }
    }
  };

  PaginaDiv.appendChild(buttonHome);

  return PaginaDiv;
};

// Función para ordenar los posts por fecha y hora, mostrando el último post en la parte superior
const ordenarPostsPorFechaHora = () => {
  const postsContainer = document.getElementById('postsContainer');
  const posts = Array.from(postsContainer.getElementsByClassName('posts__post'));

  posts.sort((a, b) => {
    const datetimeA = new Date(a.querySelector('p').textContent);
    const datetimeB = new Date(b.querySelector('p').textContent);
    return datetimeB - datetimeA;
  });

  posts.forEach(post => postsContainer.prepend(post));
};

window.addEventListener('load', ordenarPostsPorFechaHora);

