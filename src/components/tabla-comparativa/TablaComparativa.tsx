import React, { FC, ReactElement } from 'react';
import styles from './style.module.scss';

interface TablaProps {
  rows: Array<Array<string | number>>;
  headers: Array<string | number>;
}

const isLastIndex = (list: (string | number)[][], index: number) => {
  return list.length - 1 === index;
};

const TablaComparativa: FC<TablaProps> = ({
  rows,
  headers,
}: TablaProps): ReactElement => {
  return (
    <div className={styles.tabla_comparativa_fenix}>
      <table className={styles.tabla_comp_fenix}>
        <thead>
          <tr>
            {headers.map((header: string | number, index: number) => {
              if (index === 1) {
                return (
                  <th className={styles.hasTh} key={index}>
                    {header}
                  </th>
                );
              }
              return <th key={index}>{header}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            return !isLastIndex(rows, index) ? (
              <tr key={index}>
                <td className={styles.tdOne}>{row[0]}</td>
                <td className={styles.tdTwo}>{row[1]}</td>
                <td className={styles.tdThree}>{row[2]}</td>
              </tr>
            ) : (
              <tr key={index}>
                <td className={styles.tdFour}>{row[0]}</td>
                <td className={styles.tdFive}>{row[1]}</td>
                <td className={styles.tdSix}>{row[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TablaComparativa;
