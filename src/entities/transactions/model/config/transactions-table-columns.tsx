"use client"

import { ColumnDef } from "@tanstack/react-table";
import { ITransaction } from "../types";
import { getTypeColumnView } from "./type-column-view";

export const TransactionsTableColumnsConfig: ColumnDef<ITransaction>[] = [
  {
    accessorKey: "date",
    header: "Дата",
  },
  {
    accessorKey: "counterparty",
    header: "Контрагент",
  },
  {
    accessorKey: "description",
    header: "Призначення",
  },
  {
    accessorKey: "amount",
    header: "Сума",
    accessorFn: (originalRow: ITransaction) => Math.abs(originalRow.amount),
  },
  {
    accessorKey: "type",
    header: "Тип",
    accessorFn: (originalRow: ITransaction) =>
      getTypeColumnView(originalRow.amount),
  },
];
