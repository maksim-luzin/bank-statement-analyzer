import { ITransaction } from '@/entities/transactions/model/types';

export const getTransactionTotalInfo = (transactions: ITransaction[] = []) => {
  const { income, costs } = transactions.reduce(
    (acc, transaction) => {
      const amount = transaction?.amount
      if (typeof amount !== 'number' || Number.isNaN(amount) || !Number.isFinite) return acc;

      if (amount > 0) {
        acc.income += amount;
      } else {
        acc.costs += amount;
      }

      return acc;
    },
    { income: 0, costs: 0 }
  )

  return {
    income: Math.abs(income),
    costs: Math.abs(costs),
    total: income + costs,
  };
};
