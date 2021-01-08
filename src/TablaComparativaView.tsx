import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BotonGeneral from '@bit/thecocktail.nmp.boton-general';
import { moneyFormat } from './utils/formatter';
import styles from './style.module.scss';
import TablaComparativa from './components/tabla-comparativa';
import ResultadoPrincipal from './components/resultado-principal';
import moneyUrl from './assets/dinero.svg';

const title = 'Tu préstamo simple de';
const description =
  'Inicia tu proceso de solicitud ahora y conoce tu oferta en 15 minutos';
const headers = ['', 'Préstamo Simple', 'Competencia'];

interface TablaComparativaViewProps {
  redirectNext: (routeTarget: string) => void;
}

const TablaComparativaView: FC<TablaComparativaViewProps> = ({
  redirectNext,
}: TablaComparativaViewProps): ReactElement => {
  const dispatch = useDispatch();

  const tipoPrestamo = useSelector(
    (state: any) => state.nextHost.resultadoSim.tipoPrestamo
  );

  const tablaComparativaInfo = useSelector(
    (state: any) => state.nextHost.resultadoSim.tablaComparativa
  );

  const resultadoSimCompleto = useSelector(
    (state: any) => state.nextHost.resultadoSim
  );

  const calculateSavings =
    parseInt(tablaComparativaInfo.competencia.pagoTotal, 10) -
    parseInt(tablaComparativaInfo.nmp.pagoTotal, 10);

  const text = `Ahorra ${moneyFormat(
    String(calculateSavings)
  )} en tu Préstamo Simple Financiera Monte de Piedad`;

  const value = moneyFormat(
    moneyFormat(String(`${resultadoSimCompleto.pagoTotal}`))
  );

  const tableMock: Array<Record<string, string>> = [
    {
      col1: `Pago ${tipoPrestamo === 'QUINCENAL' ? 'quincenal' : 'mensual'}`,
      prestamo: moneyFormat(String(`${tablaComparativaInfo.nmp.pagoMensual}`)),
      competencia: moneyFormat(
        String(`${tablaComparativaInfo.competencia.pagoMensual}`)
      ),
    },
    {
      col1: 'Plazo',
      prestamo: `${tablaComparativaInfo.nmp.plazo} meses`,
      competencia: `${tablaComparativaInfo.competencia.plazo} meses`,
    },
    {
      col1: 'Pago total',
      prestamo: moneyFormat(String(`${tablaComparativaInfo.nmp.pagoTotal}`)),
      competencia: moneyFormat(
        String(`${tablaComparativaInfo.competencia.pagoTotal}`)
      ),
    },
  ];

  const getRows = tableMock.map((item) => {
    return Object.values(item);
  });

  const handleIniciarSolicitud = () => {
    dispatch(redirectNext('inicio-solicitud'));
  };

  return (
    <div className={styles.comparative_table_fenix_wrapper}>
      <ResultadoPrincipal
        title={title}
        value={value}
        description={description}
      />
      <div className={styles.main_table_container}>
        <div className={styles.title_container}>
          <p className={styles.table_title}>Tabla comparativa</p>
        </div>
        <div className={styles.table_boxed_container}>
          <div className={styles.table_row_container}>
            <div className={styles.table_container}>
              <TablaComparativa rows={getRows} headers={headers} />
            </div>
          </div>
          <div className={styles.text_table_container}>
            <img src={moneyUrl} alt='money' />
            <p className={styles.text_money}>{text}</p>
          </div>
        </div>
      </div>

      <div className={styles.main_button_container}>
        <BotonGeneral
          text='Quiero solicitarlo'
          onClick={handleIniciarSolicitud}
          className={styles.advance_button}
        />
      </div>
      <div className={styles.back_container}>
        <a href="/"><strong>Volver a simular</strong></a>
      </div>
    </div>
  );
};

export default TablaComparativaView;
