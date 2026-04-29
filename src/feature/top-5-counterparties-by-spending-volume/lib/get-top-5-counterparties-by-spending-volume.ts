import { ITransaction } from '@/entities/transactions/model/types';

export const getTop5CounterpartiesBySpendingVolume = (
  transactions: ITransaction[] = []
) => {
  const counterpartiesBySpendingVolume = (transactions ?? [])
    .reduce((acc, transaction) => {
      const amount = transaction?.amount;
      if (typeof amount !== 'number' || Number.isNaN(amount) || !Number.isFinite || amount > 0) return acc;
      const counterparty = transaction?.counterparty;

      if (Object.hasOwn(acc, counterparty)) {
        acc[counterparty] += amount;
      } else {
        Object.assign(acc, { [counterparty]: amount });
      }

      return acc;
    },
      {} as Record<string, number>
    );

  const topCounterparties = Object.entries(counterpartiesBySpendingVolume)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .sort(([_counterparty, amount], [_counterpartyNext, amountNext]) => amount - amountNext);

  return topCounterparties.slice(0, 5);
}
