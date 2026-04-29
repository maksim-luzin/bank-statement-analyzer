'use client'

import { TotalCard } from '@/entities/transactions/ui/total-card';
import { useGetTransactionTotalInfo } from '../hooks';

export const TotalTransactionInfo = () => {
  const {
    transactions,
    income,
    costs,
    total,
    totalColor,
    totalType
  } = useGetTransactionTotalInfo();

  if (!transactions?.length) return null

  return (
    <section className='w-all mb-8 flex flex-row flex-wrap justify-between gap-4'>
      <TotalCard name='Загальний дохід' totalAmount={income} />
      <TotalCard name='Загальна витрата' totalAmount={costs} />
      <TotalCard
        name={`Чистий результат - ${totalType}`}
        totalAmount={total}
        color={totalColor}
      />
      <TotalCard
        name='Кількість транзакцій'
        totalAmount={transactions.length}
      />
    </section>
  )
}
