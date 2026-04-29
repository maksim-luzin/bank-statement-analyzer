import { describe, expect, it } from 'vitest'

import { getTransactionTotalInfo } from '../get-transaction-total-info'
import dataForTestJSON from './data-for-test.json'

describe('Transaction total info test', () => {
  it('success', () => {
    const successResult = {
      income: 450,
      costs: 39030,
      total: -38580,
    }

    expect(getTransactionTotalInfo(dataForTestJSON)).toEqual(successResult)
  })

  it('failure', () => {
    const failureResult = {
      income: 45450,
      costs: 39030,
      total: 148580,
    }

    expect(getTransactionTotalInfo(dataForTestJSON)).not.toEqual(failureResult)
  })
})
