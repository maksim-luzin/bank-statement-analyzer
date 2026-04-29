import { ITransactionConvertRowErrors } from "@/entities/bank-statement-validation-row-errors/model/types"
import { ITransaction } from "@/entities/transactions/model/types"

export interface ITransactionConvertSuccessResult {
  transactions: ITransaction[]
  errors: ITransactionConvertRowErrors[]
}
