import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import RespuestaAltoMedioRiesgo from './RespuestaAltoMedioRiesgo';
import RespuestaAltoRiesgo from './RespuestAltoRiesgo';

export const App = (): ReactElement => {
  return (
    <div>
      <RespuestaAltoMedioRiesgo />
      <hr />
      <RespuestaAltoRiesgo />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
