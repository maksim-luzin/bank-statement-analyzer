'use client'

import { TanstackTable } from '@/shared/ui/components';
import { useBankStatementValidationRowErrors } from '../hooks';

export const ValidationRowErrorsTable = () => {
  const {
    bankStatementValidationRowErrors,
    bankStatementValidationRowErrorsTable,
  } = useBankStatementValidationRowErrors();

  if (!bankStatementValidationRowErrors?.length) return null;

  return (
    <section className='mt-8'>
      <h2 className='text-lg'>Таблиця помилок парсингу</h2>
      <TanstackTable
        tableData={bankStatementValidationRowErrorsTable}
      />
    </section>
  )
};
