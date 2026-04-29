"use client"

import { ChangeEvent, useRef, useState } from "react";
import {
  ColumnFiltersState,
  FilterFn,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { TransactionsTableColumnsConfig } from "../model/config";
import { TransactionType } from "../model/consts";
import { ITransaction } from "../model/types";
import { useGetTransactions } from "./get-transactions";

const filterDelay = 2000 // 2 * 1000 ms

export const useTransactionTableDataWithFilters = () => {
  const filterTimeout = useRef<NodeJS.Timeout>(setTimeout(() => { }));
  const [searchValue, setSearchValue] = useState<string>("");
  const transactions = useGetTransactions();
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const counterpartyOrDescriptionFilter: FilterFn<ITransaction> = (
    row,
    _columnId,
    filterValue
  ) => {
    const search = filterValue.toLowerCase();
    const field1 = String(row.original.counterparty).toLowerCase();
    const field2 = String(row.original.description).toLowerCase();
    return field1.includes(search) || field2.includes(search);
  }

  // eslint-disable-next-line react-hooks/incompatible-library
  const transactionTable = useReactTable({
    data: transactions ?? [],
    columns: TransactionsTableColumnsConfig,
    globalFilterFn: counterpartyOrDescriptionFilter,
    getCoreRowModel: getCoreRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  const counterpartyOrDescriptionFilterWithDelay = (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => {
    const searchValue = e.target.value
    setSearchValue(searchValue)

    clearTimeout(filterTimeout.current)
    filterTimeout.current = setTimeout(() => {
      transactionTable.setGlobalFilter(searchValue)
    }, filterDelay)
  };

  const transactionTypeFilter = (newType: TransactionType) => {
    if (newType === TransactionType.All) {
      transactionTable.getColumn("type")?.setFilterValue("")
    } else {
      transactionTable.getColumn("type")?.setFilterValue(newType)
    }
  };

  const transactionTypeFilterValue =
    (transactionTable.getColumn("type")?.getFilterValue() as string) ?? ""

  return {
    transactionTable,
    counterpartyOrDescriptionFilter: counterpartyOrDescriptionFilterWithDelay,
    counterpartyOrDescriptionFilterValue: searchValue,
    transactionTypeFilter,
    transactionTypeFilterValue,
  };
};
