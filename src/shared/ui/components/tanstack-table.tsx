import { FC, useCallback } from 'react';
import {
  HeaderGroup,
  Row,
  Table as TableType
} from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';

import {
  Table as TableUI,
  TableRow,
  TableHead,
  TableCell,
  TableHeader,
  TableBody
} from './table';

interface ITable<T> {
  tableData: TableType<T>;
};

export const TanstackTable = <T,>({ tableData }: ITable<T>) => {
  const tableHeadersRendering = useCallback(
    (headerGroup: HeaderGroup<T>) => (
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
    (row: Row<T>) => (
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
          {tableData.getHeaderGroups().map(tableHeadersRendering)}
        </TableHeader>
        <TableBody>
          {tableData.getRowModel().rows.map(tableDataRendering)}
        </TableBody>
      </TableUI>
    </div>
  )
};
