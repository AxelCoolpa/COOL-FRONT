import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import registerReducer, { registerStart, registerSuccess, registerFailure, registerUser } from '../features/RegisterSlice';

const mockStore = configureStore([thunk]);

describe('registerSlice', () => {
  it('should handle registerStart', () => {
    const initialState = { isLoading: false, error: null };
    const nextState = registerReducer(initialState, registerStart());
    expect(nextState.isLoading).toBe(true);
    expect(nextState.error).toBe(null);
  });

  it('should handle registerSuccess', () => {
    const initialState = { isLoading: true, error: null };
    const nextState = registerReducer(initialState, registerSuccess());
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(null);
  });

  it('should handle registerFailure', () => {
    const initialState = { isLoading: true, error: null };
    const errorMessage = 'Registration failed';
    const nextState = registerReducer(initialState, registerFailure(errorMessage));
    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});

describe('registerUser', () => {
  it('should dispatch registerStart and registerSuccess', async () => {
    const store = mockStore({});
    const formData = { /* fill in with test data */ };

    // Mock the registerUserAPI function if necessary

    await store.dispatch(registerUser(formData));

    const actions = store.getActions();
    expect(actions[0].type).toBe(registerStart.type);
    expect(actions[1].type).toBe(registerSuccess.type);
  });

  it('should dispatch registerStart and registerFailure', async () => {
    const store = mockStore({});
    const formData = { /* fill in with test data */ };

    // Mock the registerUserAPI function to throw an error

    await store.dispatch(registerUser(formData));

    const actions = store.getActions();
    expect(actions[0].type).toBe(registerStart.type);
    expect(actions[1].type).toBe(registerFailure.type);
    expect(actions[1].payload).toBe(/* expected error message */);
  });
});
