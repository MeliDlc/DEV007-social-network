import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection,updateDoc } from "firebase/firestore";
import { auth,db } from '../firebase'; 

export const loginUsuarioConCorreoYContraseña = (email, contraseña) => {
  return signInWithEmailAndPassword(auth, email, contraseña);

};

export const registrarUsuarioConCorreoYContraseña = (email, contraseña) => {
  return createUserWithEmailAndPassword(auth, email, contraseña);

};

export const agregarUnNuevoPost = (contenido) => {
  alert(auth);
  return addDoc(collection(db,'posts'), {
    contenido: contenido,
    usuario: auth.currentUser.email,
    datetime: new Date()
  });
};


export const guardarCambios = (contenidoP, textarea, guardarButton, cancelarButton, postId) => {
  const nuevoContenido = textarea.value;

  const postRef = doc(db, 'posts', postId);

  updateDoc(postRef, {
    contenido: nuevoContenido,
  })
    .then(() => {
      eliminarElementosEdicion(contenidoP, textarea, guardarButton, cancelarButton);
    })
    .catch((error) => {
      console.log("Error al guardar los cambios:", error);
    });
};