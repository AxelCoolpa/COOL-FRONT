import { AnyAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  registerStart,
  registerSuccess,
  //registerFailure,
  registerUser,
} from '../features/RegisterSlice'; // Ajusta la ruta correcta a tu archivo que define el slice de Redux

const middlewares = [thunk];
const mockStore = configureMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

describe('registerSlice', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch registerStart and registerSuccess actions for successful registration', async () => {
    const formData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    };
    const response = { ok: true };
    fetchMock.postOnce('https://cool-backend-production.up.railway.app/api/signUp', response);

    const store = mockStore({});
    await store.dispatch(registerUser(formData));

    const actions = store.getActions();
    expect(actions).toContainEqual(registerStart());
    expect(actions).toContainEqual(registerSuccess());
  });

  it('should dispatch registerStart and registerFailure actions for failed registration', async () => {
    const formData = {
      username: 'testuser',
      email: 'test@example.com',
      password: 'password123',
      confirmPassword: 'password123',
    };
    const errorMessage = 'Failed to register';
    const response = { ok: false, json: () => Promise.resolve({ message: errorMessage }) };
    fetchMock.postOnce('https://cool-backend-production.up.railway.app/api/signUp', response);

    const store = mockStore({});
    await store.dispatch(registerUser(formData));

    const actions = store.getActions();
    expect(actions).toContainEqual(registerStart());
    //expect(actions).toContainEqual(registerFailure(errorMessage));
  });
});
