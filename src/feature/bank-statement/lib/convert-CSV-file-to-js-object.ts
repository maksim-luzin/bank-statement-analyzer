import { ParseResult } from "papaparse"

import { ITransaction } from "@/entities/transactions/model/types"
import { BankStatementSchema } from "./bank-statement-schema"
import {
  ITransactionConvertResult,
  ITransactionConvertSuccessResult,
} from "../model/types"
import { ITransactionConvertRowErrors } from "@/entities/bank-statement-validation-row-errors/model/types"

export const convertCSVFileToJSObject = (
  results: ParseResult<ITransaction>
): ITransactionConvertResult => {
  if (results.errors.length) {
    return {
      errors: results.errors,
      data: null,
    }
  }

  const data = results.data.reduce(
    (acc, transaction, index) => {
      const result = BankStatementSchema.safeParse(transaction)
      if (result.success) {
        acc.transactions.push(transaction)
      } else {
        const rowErrors = result.error.issues.reduce(
          (acc, issue) => {
            Object.assign(acc, { [issue.path[0]]: issue.message })
            return acc
          },
          {} as Omit<ITransactionConvertRowErrors, "row">
        )

        acc.errors.push({
          row: index + 1,
          ...rowErrors,
        })
      }

      return acc
    },
    { transactions: [], errors: [] } as ITransactionConvertSuccessResult
  )

  return {
    errors: null,
    data,
  }
}
