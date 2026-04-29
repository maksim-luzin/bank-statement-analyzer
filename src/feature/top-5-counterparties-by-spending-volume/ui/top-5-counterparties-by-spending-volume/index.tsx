'use client'
import { useCallback } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/shared/ui/components';
import { useGetTop5CounterpartiesBySpendingVolume } from '../../hooks';
import { Counterparty } from './components/counterparty';

export const Top5CounterpartiesBySpendingVolume = () => {
  const {
    transactions,
    top5CounterpartiesBySpendingVolume
  } = useGetTop5CounterpartiesBySpendingVolume();

  const renderingCounterparty = useCallback(
    ([counterparty, amount]: [string, number], index: number) => (
      <Counterparty
        key={counterparty}
        counterparty={counterparty}
        amount={amount}
        index={index}
      />
    ),
    []
  );

  if (!transactions?.length) return null;

  return (
    <section>
      <Card size='sm' className='mt-8 max-w-md p-4'>
        <CardHeader>
          <CardTitle>
            <h2 className='text-lg'>Топ-5 контрагентів за обсягом витрат</h2>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex w-full max-w-sm flex-col gap-2 text-sm'>
            {top5CounterpartiesBySpendingVolume.map(renderingCounterparty)}
          </div>
        </CardContent>
      </Card>
    </section>
  )
};
