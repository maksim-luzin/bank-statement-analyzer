import { BankStatementValidationRowErrorsProvider } from "@/entities/bank-statement-validation-row-errors/providers"
import { ValidationRowErrorsTable } from "@/entities/bank-statement-validation-row-errors/ui"
import { TransactionsProvider } from "@/entities/transactions/providers"
import { BankStatementAnalyzer } from "@/feature/bank-statement/ui/bank-statement-analyzer"
import { Top5CounterpartiesBySpendingVolume } from "@/feature/top-5-counterparties-by-spending-volume/ui"
import { TotalTransactionInfo } from "@/feature/total-transaction-info/ui"
import { Header } from "@/widgets/header/ui"

export default function Page() {
  return (
    <BankStatementValidationRowErrorsProvider>
      <TransactionsProvider>
        <Header />
        <div className="mx-auto max-w-7xl py-4">
          <TotalTransactionInfo />
          <BankStatementAnalyzer />
          <Top5CounterpartiesBySpendingVolume />
          <ValidationRowErrorsTable />
        </div>
      </TransactionsProvider>
    </BankStatementValidationRowErrorsProvider>
  )
}
