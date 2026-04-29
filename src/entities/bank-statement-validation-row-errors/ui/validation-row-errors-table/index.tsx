'use client'

import { useBankStatementValidationRowErrors } from '../../hooks';
import { Table } from './components/table';

export const ValidationRowErrorsTable = () => {
  const {
    bankStatementValidationRowErrors,
    bankStatementValidationRowErrorsTable,
  } = useBankStatementValidationRowErrors();

  if (!bankStatementValidationRowErrors?.length) return null;

  return (
    <section className='mt-8'>
      <h2 className='text-lg'>Таблиця помилок парсингу</h2>
      <Table
        bankStatementValidationRowErrors={bankStatementValidationRowErrorsTable}
      />
    </section>
  )
};
