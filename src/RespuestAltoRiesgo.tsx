import React, { FC, ReactElement } from 'react';
import AltoRiesgo from './components/respuesta-alto-riesgo';
import styles from './style.module.scss';

const RespuestaAltoRiesgo: FC = (): ReactElement => {
  return (
    <div className={styles.card_wrapper}>
      <AltoRiesgo />
    </div>
  );
};

export default RespuestaAltoRiesgo;
