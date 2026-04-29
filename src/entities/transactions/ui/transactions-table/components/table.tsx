import { FC, useCallback } from 'react';
import {
  HeaderGroup,
  Row,
  Table as TableType
} from '@tanstack/react-table';

import {
  Table as TableUI,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from '@/shared/ui/components';
import { flexRender } from '@tanstack/react-table';
import { ITransaction } from '@/entities/transactions/model/types';

interface ITable {
  transactionTable: TableType<ITransaction>;
};

export const Table: FC<ITable> = ({ transactionTable }) => {
  const tableHeadersRendering = useCallback(
    (headerGroup: HeaderGroup<ITransaction>) => (
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
    (row: Row<ITransaction>) => (
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
          {transactionTable.getHeaderGroups().map(tableHeadersRendering)}
        </TableHeader>
        <TableBody>
          {transactionTable.getRowModel().rows.map(tableDataRendering)}
        </TableBody>
      </TableUI>
    </div>
  )
};
