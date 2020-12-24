import React, { FC, ReactElement, useState, useEffect } from 'react';
import styles from './style.module.scss';
import Heart from '../../assets/Heart.svg';
import GenericButton from '../../shared/generic-button';
import NextBtnDisabled from '../../assets/SiguienteDisabled.svg';

const AltoMedioRiesgo: FC = (): ReactElement => {
  const userData = {
    userName: 'Sofía',
  };

  const handleClick = () => {
    console.log('debe de ir a ----> Ir al sitio principal ');
  };

  return (
    <div className={styles.generic_card}>
      <img src={Heart} alt='heart' />

      <h2>
        <b>Gracias por tu interés</b>
      </h2>

      <p className={styles.textCenter}>
        {userData.userName}, por el momento{' '}
        <strong>
          no has sido elegible para una oferta de Préstamo Simple.
        </strong>
      </p>

      <div className={styles.container_button}>
        <div>
          <GenericButton onClick={handleClick}>
            Ir al sitio principal
            <img src={NextBtnDisabled} alt='siguiente' />
          </GenericButton>
        </div>
      </div>
    </div>
  );
};

export default AltoMedioRiesgo;
//always use the default export
