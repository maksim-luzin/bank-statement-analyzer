import { useMemo } from 'react';

import { useGetTransactions } from '@/entities/transactions/hooks';
import { TransactionType } from '@/entities/transactions/model/consts';
import { getTransactionTotalInfo } from '../lib';

export const useGetTransactionTotalInfo = () => {
  const transactions = useGetTransactions();

  const { total, income, costs } = useMemo(
    () => getTransactionTotalInfo(transactions),
    [transactions]
  );

  const totalColor = useMemo(
    () => (total > 0 ? 'text-green-700' : total < 0 ? 'text-red-900' : ''),
    [total]
  );

  const totalType = useMemo(
    () =>
      total > 0
        ? TransactionType.Income.toLocaleLowerCase()
        : total < 0
          ? TransactionType.Cost.toLocaleLowerCase()
          : '',
    [total]
  );

  return {
    transactions,
    income,
    costs,
    total: Math.abs(total),
    totalColor,
    totalType,
  };
};
