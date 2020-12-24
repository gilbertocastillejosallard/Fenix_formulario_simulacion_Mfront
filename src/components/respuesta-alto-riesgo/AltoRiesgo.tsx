import React, { FC, ReactElement } from 'react';
import styles from './style.module.scss';
import Heart from '../../assets/Heart.svg';

const AltoRiesgo: FC = (): ReactElement => {
  const userData = {
    userName: 'Sofía',
  };

  return (
    <div className={styles.generic_card}>
      <img src={Heart} alt='heart' />

      <h2>
        <b>Gracias por tu interés</b>
      </h2>

      <p className={styles.textCenter}>
        {userData.userName},{' '}
        <strong>
          por el momento no has sido elegible para una oferta de Préstamo
          Simple.
        </strong>{' '}
        Pero tenemos más alternativas de préstamos que te pueden interesar.
      </p>

      <hr />

      <p className={styles.p_display_none}>
        Si lo deseas, explora las siguientes opciones para ti y conoce más al
        respecto
      </p>

      <div className={styles.container_card_link}>
        <div className={styles.wrapper_card_auto}>
          <a href=''>
            <div className={styles.card_img_auto}>
              <p className={styles.text_card}>
                <strong>Autoavanza</strong>
              </p>
            </div>
          </a>
        </div>

        <div className={styles.wrapper_card_prenda}>
          <a href=''>
            <div className={styles.card_img_prenda}>
              <p className={styles.text_card}>
                <strong>Préstamo prendario</strong>
              </p>
            </div>
          </a>
        </div>
      </div>

      <a href=''>
        <div className={styles.container_card_long}>
          <div className={styles.card_long_img}>
            <p className={styles.text_card}>
              <strong>Autoavanza</strong>
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default AltoRiesgo;
//always use the default export
