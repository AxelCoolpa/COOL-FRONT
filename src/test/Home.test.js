import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/Home';

describe('Home component', () => {
  test('renders SideBar component', () => {
    // Renderiza el componente Home
    const { getByTestId } = render(<Home />);
    
    
  });
});
