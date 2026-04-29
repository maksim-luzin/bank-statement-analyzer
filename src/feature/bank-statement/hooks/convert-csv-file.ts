import Papa from "papaparse"

import { useSetTransactions } from "@/entities/transactions/hooks"
import { ITransaction } from "@/entities/transactions/model/types"
import { ErrorNotification } from "@/shared/lib"
import { convertCSVFileToJSObject } from "../lib"
import { PapaParseConfig } from "../model/config"
import { Messages } from "../model/const"
import { useSetBankStatementValidationRowErrors } from "@/entities/bank-statement-validation-row-errors/hooks"

export const useConvertCSVFile = () => {
  const setTransactions = useSetTransactions()
  const setRowErrors = useSetBankStatementValidationRowErrors()

  return (file: File) => {
    if (!file) return
    Papa.parse(file, {
      ...PapaParseConfig,
      error: () => {
        ErrorNotification(Messages.FileConversionFailed)
      },
      complete: (result: Papa.ParseResult<ITransaction>): void => {
        const { errors, data } = convertCSVFileToJSObject(result)
        if (errors?.length || data === null) {
          ErrorNotification(Messages.FileConversionFailed)
          return
        }

        setTransactions(data?.transactions)
        setRowErrors(data.errors)
      },
    })
  }
}
