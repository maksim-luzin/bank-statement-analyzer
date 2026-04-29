import { FC, useCallback } from 'react';
import { HeaderGroup, Row, Table as TableType } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import {
  Table as TableUI,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/shared/ui/components';
import { ITransactionConvertRowErrors } from '@/entities/bank-statement-validation-row-errors/model/types';

interface ITable {
  bankStatementValidationRowErrors: TableType<ITransactionConvertRowErrors>;
}

export const Table: FC<ITable> = ({ bankStatementValidationRowErrors }) => {
  const tableHeadersRendering = useCallback(
    (headerGroup: HeaderGroup<ITransactionConvertRowErrors>) => (
      <TableRow key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <TableHead key={header.id}>
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableHead>
        ))}
      </TableRow>
    ),
    []
  );

  const tableDataRendering = useCallback(
    (row: Row<ITransactionConvertRowErrors>) => (
      <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
        {row.getVisibleCells().map((cell) => (
          <TableCell key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TableCell>
        ))}
      </TableRow>
    ),
    []
  );

  return (
    <div className='overflow-hidden rounded-md border'>
      <TableUI>
        <TableHeader>
          {bankStatementValidationRowErrors
            .getHeaderGroups()
            .map(tableHeadersRendering)}
        </TableHeader>
        <TableBody>
          {bankStatementValidationRowErrors
            .getRowModel()
            .rows.map(tableDataRendering)}
        </TableBody>
      </TableUI>
    </div>
  );
}
