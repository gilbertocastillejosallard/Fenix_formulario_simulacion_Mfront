import React, { ReactElement, useEffect, useState } from 'react';
import TablaAmortizacion from '@bit/thecocktail.nmp.tabla-amortizacion';
import BotonGeneral from '@bit/thecocktail.nmp.boton-general';
import { useDispatch, useSelector } from 'react-redux';
import { moneyFormat } from '../../utils/formatter';
import styles from './style.module.scss';
import arrowUrl from '../../assets/arrow-tabla-amortizacion.svg';

interface TablaAmortizacionCompProps {
  redirectNext: (routeTarget: string) => void;
}

const TablaAmortizacionComp = ({
  redirectNext,
}: TablaAmortizacionCompProps): ReactElement => {
  const dispatch = useDispatch();

  const tipoPrestamo = useSelector(
    (state: any) => state.nextHost.resultadoSim.tipoPrestamo
  );

  const tableData = useSelector(
    (state: any) => state.nextHost.resultadoSim.tablaAmortizacion
  );

  const headers = [
    tipoPrestamo === 'QUINCENAL' ? 'Quincena' : 'Mes',
    'Monto',
    'Capital',
    'Interés',
    'Pago',
  ];

  const cartasData = [
    {
      title: 'Interés total',
      subTitle: moneyFormat(String(tableData.cartas.interesTotal)),
    },
    {
      title: 'Interés por cada mil',
      subTitle: moneyFormat(String(tableData.cartas.intenteresPorCadaMil)),
    },
    { title: 'Tasa anual*', subTitle: `${tableData.cartas.tasaInteres}%` },
  ];

  const getRows: string[][] = tableData.tabla.map(
    (item: Record<string, string>) => {
      return [
        item.noPago,
        moneyFormat(String(item.capitalInit)),
        moneyFormat(String(item.abonoCapital)),
        moneyFormat(String(item.interes)),
        moneyFormat(String(item.abonoTotal)),
      ];
    }
  );

  const getExpandedData = (count?: number) => {
    if (count) {
      return getRows.filter((data: Array<string>, index: number) => {
        return index < count;
      });
    }
    return getRows;
  };

  const [expanded, setExpanded] = useState<boolean>(false);
  const [tableBodyData, setTableBodyData] = useState<string[][]>(
    getExpandedData(6)
  );

  useEffect(() => {
    setTableBodyData(getExpandedData(expanded ? undefined : 6));
  }, [expanded]);

  const handleIniciarSolicitudClick = (): void => {
    dispatch(redirectNext('inicio-solicitud'));
  };

  const handleExpandedClick = (): void => {
    setExpanded(!expanded);
  };

  //

  return (
    <div>
      <div className={styles.title_table_container}>
        <p className={styles.title_table}>Tabla de amortización</p>
      </div>
      <div className={styles.container}>
        <div className={styles.view_table_wrapper}>
          <div>
            <div className={styles.table_container_card}>
              <div className={styles.table_container}>
                <div className={styles.cards_container}>
                  {cartasData.map((item, index) => {
                    return (
                      <div key={index}>
                        <p className={styles.card_title}>{item.title}</p>
                        <p className={styles.card_subtitle}>{item.subTitle}</p>
                      </div>
                    );
                  })}
                </div>
                <TablaAmortizacion headers={headers} rows={tableBodyData} />
                <div className={styles.button_tabla_expanded_container}>
                  <BotonGeneral
                    text='Ver todo'
                    className={styles.button_tabla_expanded}
                    onClick={handleExpandedClick}
                  />
                  <img
                    style={{
                      transform:
                        tableBodyData.length > 6 ? 'rotate(180deg)' : undefined,
                    }}
                    alt='arrow_amort'
                    src={arrowUrl}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.message_tabla_container}>
                <p className={styles.message_tabla}>
                  Nuestra oferta está calculada con el{' '}
                  <strong>CAT promedio de 95.3%.</strong> *Los datos mostrados
                  se usan para fines informativos y de comparación
                  exclusivamente, la tasa anual no incluye I.V.A. y puede variar
                  dependiendo del proceso de evaluación.
                </p>
              </div>
              <div className={styles.iniciar_solicitud_container}>
                <BotonGeneral
                  text='Quiero solicitarlo'
                  onClick={handleIniciarSolicitudClick}
                  className={styles.advance_button}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablaAmortizacionComp;
