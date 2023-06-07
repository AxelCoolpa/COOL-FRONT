import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from '../store/Store';
import { BrowserRouter as Router, RouterProvider } from 'react-router-dom';
import { router } from '../routes/routeControl';

jest.mock('react-dom/client', () => ({
  createRoot: jest.fn().mockReturnThis(),
  render: jest.fn(),
}));

describe('Index', () => {
  it('renders the component', () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    );

    expect(ReactDOM.createRoot).toHaveBeenCalledWith(
      document.getElementById('root'),
      { hydrate: true }
    );

    expect(ReactDOM.render).toHaveBeenCalledWith(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <RouterProvider router={router} />
          </Router>
        </Provider>
      </React.StrictMode>,
      undefined
    );
  });
});
