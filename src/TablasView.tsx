import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import styles from './style.module.scss';
import TablaAmortizacionComp from './components/tabla-amortizacion/TablaAmortizacion';
import TablaComparativaView from './TablaComparativaView';

const ReduxWrapper = (props: {
  redirectNext: (routeTarget: string) => void;
}): ReactElement => {
  const windowObject: any = window;
  const { reduxStore } = windowObject;

  const { redirectNext } = props;

  return (
    <Provider store={reduxStore}>
      <TablaComparativaView redirectNext={redirectNext} />

      <TablaAmortizacionComp redirectNext={redirectNext} />
    </Provider>
  );
};

export default ReduxWrapper;

//always use the default export
