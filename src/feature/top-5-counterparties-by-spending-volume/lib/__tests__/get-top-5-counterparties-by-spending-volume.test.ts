import { describe, expect, it } from 'vitest';

import { getTop5CounterpartiesBySpendingVolume } from '../get-top-5-counterparties-by-spending-volume';
import dataForTestJSON from './data-for-test.json';

describe('Transaction total info test', () => {
  it('success', () => {
    const successResult = [
      ['ТОВ "Ета Білд"', -23800],
      ['ФОП Шевченко В.П.', -9000],
      ['Rozetka', -3200],
      ['Епіцентр', -2850],
      ['ПриватБанк', -630],
    ];

    expect(getTop5CounterpartiesBySpendingVolume(dataForTestJSON)).toEqual(
      successResult
    );
  });

  it('failure', () => {
    const failureResult = [
      ['Rozetka', -3200],
      ['Епіцентр', -2850],
      ['ТОВ "Ета Білд"', -23800],
      ['ФОП Шевченко В.П.', -9000],
      ['ПриватБанк', -630],
    ];

    expect(getTop5CounterpartiesBySpendingVolume(dataForTestJSON)).not.toEqual(
      failureResult
    );
  });
});
