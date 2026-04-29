import { Table as TableType } from "@tanstack/react-table"
import { json2csv } from "json-2-csv"

import { ITransaction } from "../model/types"

export const downloadCSVFile = (transactionTable: TableType<ITransaction>) => {
  const visibleTable = transactionTable
    .getRowModel()
    .rows.map((row) => row.original)
  const csv = json2csv(visibleTable)
  const csvBlobContent = new Blob([csv], { type: "text/plain" })
  const localUrl = self.URL.createObjectURL(csvBlobContent)
  const a: HTMLAnchorElement = document.createElement("a")
  a.href = localUrl
  Object.assign(a, { download: "filtered-table.csv" })
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  self.URL.revokeObjectURL(localUrl)
}
