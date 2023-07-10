import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import {
  auth,
  db,
} from '../firebase';

// eslint-disable-next-line
export const loginUsuarioConCorreoYContraseña = (email, contraseña) => signInWithEmailAndPassword(auth, email, contraseña);

// eslint-disable-next-line
export const registrarUsuarioConCorreoYContraseña = (email, contraseña) => createUserWithEmailAndPassword(auth, email, contraseña);

export const agregarUnNuevoPost = (content) => {
  alert(auth);
  return addDoc(collection(db, 'posts'), {
    contenido: content,
    usuario: auth.currentUser.email,
    datetime: new Date(),
  });
};

export const editarPost = async (postId, nuevoContenido) => {
  const postRef = doc(db, 'posts', postId);
  try {
    await updateDoc(postRef, {
      contenido: nuevoContenido,
    });
    console.log('Post editado exitosamente');
  } catch (error) {
    console.log('Error al editar el post:', error);
  }
};

export const borrarPost = async (postId) => {
  const postRef = doc(db, 'posts', postId);
  try {
    await deleteDoc(postRef);
    console.log('Post borrado exitosamente');
  } catch (error) {
    console.log('Error al borrar el post:', error);
  }
};
