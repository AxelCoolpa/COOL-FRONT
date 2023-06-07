import { render, RenderResult } from '@testing-library/react';
import Login from '../components/Login';

test('renders Login component correctly', () => {
    const { getByText, getByPlaceholderText }: RenderResult = render(<Login />);

  // Verificar que el componente se renderiza correctamente
  getByText('Hello!');
});
