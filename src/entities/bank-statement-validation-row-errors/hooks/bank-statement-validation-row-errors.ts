'use client'

import {
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';

import { useGetBankStatementValidationRowErrors } from './get-bank-statement-validation-row-errors';
import { ValidationRowErrorsTableColumnsConfig } from '../model/config';

export const useBankStatementValidationRowErrors = () => {
  const bankStatementValidationRowErrors = useGetBankStatementValidationRowErrors();

  // eslint-disable-next-line react-hooks/incompatible-library
  const bankStatementValidationRowErrorsTable = useReactTable({
    data: bankStatementValidationRowErrors ?? [],
    columns: ValidationRowErrorsTableColumnsConfig,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return {
    bankStatementValidationRowErrors,
    bankStatementValidationRowErrorsTable,
  };
};
