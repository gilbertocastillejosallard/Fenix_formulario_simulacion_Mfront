import React, { FC, ReactElement } from 'react';

import AltoMedioRiesgo from './components/respusta-alto-medio';
import styles from './style.module.scss';

const RespuestaAltoMedioRiesgo: FC = (): ReactElement => {
  return (
    <div className={styles.card_wrapper}>
      <AltoMedioRiesgo />
    </div>
  );
};

export default RespuestaAltoMedioRiesgo;
