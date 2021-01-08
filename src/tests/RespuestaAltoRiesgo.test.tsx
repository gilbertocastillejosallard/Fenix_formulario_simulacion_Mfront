import React from 'react';
import { render, screen } from '@testing-library/react';

import RespuestaAltoRiesgo from '../RespuestAltoRiesgo';

test('renders text ', () => {
  render(<RespuestaAltoRiesgo />);
  const textInComponent = screen.getByText(/Gracias por tu interés/i);
  expect(textInComponent).toBeInTheDocument();
});
