'use client'

import { ColumnDef } from '@tanstack/react-table'
import { ITransactionConvertRowErrors } from '../types';

export const ValidationRowErrorsTableColumnsConfig: ColumnDef<ITransactionConvertRowErrors>[] =
  [
    {
      accessorKey: 'row',
      header: 'Рядок',
    },
    {
      accessorKey: 'date',
      header: 'Дата',
    },
    {
      accessorKey: 'counterparty',
      header: 'Контрагент',
    },
    {
      accessorKey: 'description',
      header: 'Призначення',
    },
    {
      accessorKey: 'amount',
      header: 'Сума',
    },
  ];
