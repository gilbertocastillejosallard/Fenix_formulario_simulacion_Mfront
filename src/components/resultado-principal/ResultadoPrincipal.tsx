import React, { FC, ReactElement } from 'react';
import styles from './style.module.scss';

interface ResultadoProps {
  title: string;
  value?: string;
  description?: string;
}

const ResultadoPrincipal: FC<ResultadoProps> = ({
  title,
  value,
  description,
}: ResultadoProps): ReactElement => {
  return (
    <div className={styles.main_table_result}>
      <h6 className={styles.result_title}>{title}</h6>
      <h1 className={styles.result_value}>{value}</h1>
      <p className={styles.result_description}>{description}</p>
    </div>
  );
};

export default ResultadoPrincipal;
