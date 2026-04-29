"use client"
import { FC } from "react"
import { Download } from "lucide-react"
import { Table as TableType } from "@tanstack/react-table"

import { Button } from "@/shared/ui/components"
import { ITransaction } from "@/entities/transactions/model/types"
import { downloadCSVFile } from "@/entities/transactions/lib"

interface IExportTable {
  transactionTable: TableType<ITransaction>
}

export const ExportTable: FC<IExportTable> = ({ transactionTable }) => {
  const exportTableToCSV = () => {
    downloadCSVFile(transactionTable)
  }

  return (
    <Button variant="ghost" size="icon" onClick={exportTableToCSV}>
      <Download className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  )
}
