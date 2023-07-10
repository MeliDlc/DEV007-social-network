import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

import { auth, db } from '../firebase';

export const loginUsuarioConCorreoYContraseña = (email, contraseña) =>
{ return signInWithEmailAndPassword(auth, email, contraseña);

};

export const registrarUsuarioConCorreoYContraseña = (email, contraseña) => 
{
  return createUserWithEmailAndPassword(auth, email, contraseña);
};

export const agregarUnNuevoPost = (contenido) => {
  alert(auth);
  return addDoc(collection(db, 'posts'), {
    contenido: contenido,
    usuario: auth.currentUser.email,
    datetime: new Date()
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