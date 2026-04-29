import { z } from "zod"
import { BankStatementConvertRowErrors } from "../model/const"

export const BankStatementSchema = z.object({
  date: z.iso.date(BankStatementConvertRowErrors.date),
  counterparty: z
    .string({ error: BankStatementConvertRowErrors.counterparty })
    .min(1, { error: BankStatementConvertRowErrors.counterparty }),
  description: z
    .string({ error: BankStatementConvertRowErrors.description })
    .min(1, { error: BankStatementConvertRowErrors.description }),
  amount: z.preprocess(
    (val) => (typeof val === "string" && val.length > 0 ? Number(val) : val),
    z.number({ error: BankStatementConvertRowErrors.amount })
  ),
})

export type TBankStatementSchema = z.infer<typeof BankStatementSchema>
