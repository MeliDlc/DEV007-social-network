import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  addDoc,
  deleteDoc,
  updateDoc,
} from 'firebase/firestore';

import {
  registrarUsuarioConCorreoYContraseña,
  loginUsuarioConCorreoYContraseña,
  agregarUnNuevoPost,
  borrarPost,
  editarPost,
} from '../src/lib';

jest.mock('firebase/auth');
jest.mock('@firebase/firestore');

jest.mock('../src/firebase.js', () => ({
  auth: { currentUser: { email: 'gabo@gmail.com' } },
}));

describe('loginUsuarioConCorreoYContraseña', () => {
  it('es una funcion', () => {
    expect(typeof loginUsuarioConCorreoYContraseña).toBe('function');
  });

  it('Deberia llamar a la funcion signInWithEmailAndPassword', async () => {
    await loginUsuarioConCorreoYContraseña(
      'gabo@gmail.com',
      'gabito',
    );
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deveria devolver un objeto', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce({
      user: { email: 'gabo@gmail.com' },
    });
    const response = await loginUsuarioConCorreoYContraseña(
      'gabo@gmail.com',
      'gabito',
    );
    expect(response.user.email).toBe('gabo@gmail.com');
  });
});

describe('crearUsuarioConCorreoYContraseña', () => {
  it('Deveria llamar a la funcion createUserWithEmailAndPassword cuando es ejecutada', async () => {
    await registrarUsuarioConCorreoYContraseña(
      'gabo@gmail.com',
      'gabito',
    );
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deveria devolver un objeto', async () => {
    createUserWithEmailAndPassword.mockReturnValueOnce({
      user: { email: 'gabo@gmail.com' },
    });
    const crearUsuario = await registrarUsuarioConCorreoYContraseña(
      'gabo@gmail.com',
      'gabito',
    );
    expect(crearUsuario.user.email).toBe('gabo@gmail.com');
  });
});

describe('agregarUnNuevoPost', () => {
  it('es una funcion', () => {
    expect(typeof agregarUnNuevoPost).toBe('function');
  });
  it('Deberia llamar a la funcion addDoc cuando es ejecutada', async () => {
    await agregarUnNuevoPost('gabo@gmail.com');
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('editarPost', () => {
  it('es una funcion', () => {
    expect(typeof editarPost).toBe('function');
  });
  it('Deberia llamar a la funcion updateDoc cuando es ejecutada', async () => {
    await editarPost('gabo@gmail.com');
    expect(updateDoc).toHaveBeenCalled();
  });
});

describe('borrarPost', () => {
  it('es una funcion', () => {
    expect(typeof borrarPost).toBe('function');
  });
  it('Deberia llamar a la funcion deleteDoc cuando es ejecutada', async () => {
    await borrarPost('gabo@gmail.com');
    expect(deleteDoc).toHaveBeenCalled();
  });
});
