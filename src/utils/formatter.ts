export interface MoneyFormat {
  moneyFormatValue?: string;
  numberValue: number;
}

export const stringValue2MoneyFormat = (stringValue: string): MoneyFormat => {
  const [newStringValue, decimals] = stringValue.split('.');

  const numberValue = Number(newStringValue.replace(/\D/g, ''));
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(numberValue)) {
    return { numberValue };
  }
  const prepend = numberValue < 0 ? '-$' : '$';
  const newValue = `${numberValue} `;

  let moneyFormatValue =
    prepend +
    newValue.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d)\.?)/g, ',');

  if (decimals) {
    moneyFormatValue += `.${decimals.replace(/\D/g, '')}`;
  }

  return {
    moneyFormatValue,
    numberValue: decimals
      ? Number(`${numberValue}.${decimals.replace(/\D/g, '')}`)
      : numberValue,
  };
};

export const moneyFormat = (strNumber: string): string =>
  stringValue2MoneyFormat(strNumber).moneyFormatValue || '';
