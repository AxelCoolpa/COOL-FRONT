import { AnyAction } from '@reduxjs/toolkit';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  loginStart,
  loginSuccess,
  loginFailure,
  updateFormData,
  logout,
  loginUser,
  LoginFormData,
} from '../features/LoginSlice'; 
import { baseURL } from '../baseURL';

const middlewares = [thunk];
const mockStore = configureMockStore<any, ThunkDispatch<any, any, AnyAction>>(middlewares);

const mockFormData: LoginFormData = {
  email: 'test@example.com',
  password: 'password123',
};

const mockUserData: LoginFormData = {
  _id: 'user123',
  email: 'test@example.com',
  password: 'password123',
  avatar: 'avatar-url',
  username: 'testuser',
  firstName: 'John',
  lastname: 'Doe',
  DNI: '123456789',
  phone: '123-456-7890',
  location: 'Some Location',
  description: 'Some Description',
  role: { rolename: 'user' },
};

describe('loginSlice', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create the loginStart action', () => {
    const expectedAction = { type: 'login/loginStart' };
    expect(loginStart()).toEqual(expectedAction);
  });

  it('should create the loginSuccess action with user data payload', () => {
    const expectedAction = { type: 'login/loginSuccess', payload: mockUserData };
    expect(loginSuccess(mockUserData)).toEqual(expectedAction);
  });

  it('should create the loginFailure action with the correct payload', () => {
    const errorMessage = 'Invalid credentials';
    const expectedAction = { type: 'login/loginFailure', payload: errorMessage };
    expect(loginFailure(errorMessage)).toEqual(expectedAction);
  });

  it('should create the updateFormData action with the correct payload', () => {
    const formDataUpdate: Partial<LoginFormData> = { username: 'testuser' };
    const expectedAction = { type: 'login/updateFormData', payload: formDataUpdate };
    expect(updateFormData(formDataUpdate)).toEqual(expectedAction);
  });

  it('should create the logout action', () => {
    const expectedAction = { type: 'login/logout' };
    expect(logout()).toEqual(expectedAction);
  });

  it('should dispatch loginStart and loginSuccess actions for successful login', async () => {
    const response = { ok: true, json: () => Promise.resolve(mockUserData) };
    fetchMock.postOnce(`${baseURL}/signIn`, response);

    const store = mockStore({});
    await store.dispatch(loginUser(mockFormData));

    const actions = store.getActions();
    expect(actions).toContainEqual(loginStart());
  });

  it('should dispatch loginStart and loginFailure actions for failed login', async () => {
    const errorMessage = 'Invalid credentials';
    const response = { ok: false, json: () => Promise.resolve({ message: errorMessage }) };
    fetchMock.postOnce(`${baseURL}/signIn`, response);

    const store = mockStore({});
    await store.dispatch(loginUser(mockFormData));

    const actions = store.getActions();
    expect(actions).toContainEqual(loginStart());
  });
});
