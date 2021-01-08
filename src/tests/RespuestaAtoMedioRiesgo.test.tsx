import React from 'react';
import { render, screen } from '@testing-library/react';
import RespuestaAltoMedioRiesgo from '../RespuestaAltoMedioRiesgo';

test('renders text ', () => {
  render(<RespuestaAltoMedioRiesgo />);
  const textInComponent = screen.getByText(/Gracias por tu interés/i);
  expect(textInComponent).toBeInTheDocument();
});
