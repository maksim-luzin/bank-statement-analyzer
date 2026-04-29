import { useMemo } from 'react';

import { useGetTransactions } from '@/entities/transactions/hooks';
import { getTop5CounterpartiesBySpendingVolume } from '../lib';

export const useGetTop5CounterpartiesBySpendingVolume = () => {
  const transactions = useGetTransactions();

  const top5CounterpartiesBySpendingVolume = useMemo(
    () => getTop5CounterpartiesBySpendingVolume(transactions),
    [transactions]
  );

  return {
    top5CounterpartiesBySpendingVolume,
    transactions,
  };
}
