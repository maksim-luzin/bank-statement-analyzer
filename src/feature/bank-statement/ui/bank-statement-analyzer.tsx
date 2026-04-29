"use client"

import { Dropzone } from "@/shared/ui/components"
import { TransactionsTable } from "@/entities/transactions/ui"
import { DropzoneAccept, InputAccept } from "../model/config"
import { useGetTransactions } from "@/entities/transactions/hooks"
import { useConvertCSVFile } from "../hooks"

export const BankStatementAnalyzer = () => {
  const transactions = useGetTransactions()
  const convertCSVFile = useConvertCSVFile()

  if (!transactions) {
    // File upload
    return (
      <main className="flex h-screen w-full items-center justify-center">
        <Dropzone
          setFilesUploaded={convertCSVFile}
          dropzoneAccept={DropzoneAccept}
          inputAccept={InputAccept}
        />
      </main>
    )
  }

  return <TransactionsTable />
}
