"use client"

import { useTransactionTableDataWithFilters } from "../../hooks"
import { ExportTable } from "./components/export-table"
import { SearchFilter } from "./components/search-filter"
import { Table } from "./components/table"
import { TypeFilter } from "./components/type-filter"

export const TransactionsTable = () => {
  const {
    transactionTable,
    counterpartyOrDescriptionFilter,
    counterpartyOrDescriptionFilterValue,
    transactionTypeFilter,
    transactionTypeFilterValue,
  } = useTransactionTableDataWithFilters()

  return (
    <main>
      <div className="gap-r flex items-center justify-between py-4">
        <h2 className="text-lg">Таблиця транзакцій</h2>
        <div className="flex items-center justify-end gap-4">
          <ExportTable transactionTable={transactionTable} />
          <SearchFilter
            counterpartyOrDescriptionFilter={counterpartyOrDescriptionFilter}
            counterpartyOrDescriptionFilterValue={
              counterpartyOrDescriptionFilterValue
            }
          />
          <TypeFilter
            transactionTypeFilter={transactionTypeFilter}
            transactionTypeFilterValue={transactionTypeFilterValue}
          />
        </div>
      </div>
      <Table transactionTable={transactionTable} />
    </main>
  )
}
