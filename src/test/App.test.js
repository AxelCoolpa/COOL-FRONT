import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App component', () => {
  test('renders the Home component when the path is "/"', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    // Verificar que el componente Home se renderice
    const homeElement = screen.getByTestId('home-component');
    expect(homeElement).toBeInTheDocument();
  });
});
