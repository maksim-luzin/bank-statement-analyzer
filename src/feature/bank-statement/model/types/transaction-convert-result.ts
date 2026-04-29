import { ParseError } from "papaparse"

import { ITransactionConvertSuccessResult } from "./transaction-convert-success-result"

export interface ITransactionConvertResult {
  errors: ParseError[] | null
  data: ITransactionConvertSuccessResult | null
}
