import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';

export const App = (): ReactElement => {
  return <div>hello world</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
