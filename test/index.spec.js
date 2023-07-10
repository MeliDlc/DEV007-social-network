import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

import {
  registrarUsuarioConCorreoYContraseña,
  loginUsuarioConCorreoYContraseña,
} from '../src/lib';

jest.mock('firebase/auth');
jest.mock('@firebase/firestore');

jest.mock('../src/firebase.js', () => ({
  auth: { currentUser: { email: 'norma@gmail.com' } },
}));

describe('loginUsuarioConCorreoYContraseña', () => {
  it('es una funcion', () => {
    expect(typeof loginUsuarioConCorreoYContraseña).toBe('function');
  });

  it('Deberia llamar a la funcion signInWithEmailAndPassword', async () => {
    await loginUsuarioConCorreoYContraseña(
      'norma@gmail.com',
      'norma123',
    );
    expect(signInWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deveria devolver un objeto', async () => {
    signInWithEmailAndPassword.mockReturnValueOnce({
      user: { email: 'norma@gmail.com' },
    });
    const response = await loginUsuarioConCorreoYContraseña(
      'norma@gmail.com',
      'norma123',
    );
    expect(response.user.email).toBe('norma@gmail.com');
  });
});

describe('crearUsuarioConCorreoYContraseña', () => {
  it('Deveria llamar a la funcion createUserWithEmailAndPassword cuando es ejecutada', async () => {
    await registrarUsuarioConCorreoYContraseña(
      'norma@gmail.com',
      'norma123',
    );
    expect(createUserWithEmailAndPassword).toHaveBeenCalled();
  });

  it('Deveria devolver un objeto', async () => {
    createUserWithEmailAndPassword.mockReturnValueOnce({
      user: { email: 'norma@gmail.com' },
    });
    const crearUsuario = await registrarUsuarioConCorreoYContraseña(
      'norma@gmail.com',
      'norma123',
    );
    expect(crearUsuario.user.email).toBe('norma@gmail.com');
  });
});
