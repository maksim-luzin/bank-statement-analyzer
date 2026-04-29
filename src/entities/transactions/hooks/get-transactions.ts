import { useContext } from "react"
import { TransactionsContext } from "../providers"

export const useGetTransactions = () => {
  const { transactions } = useContext(TransactionsContext)

  return transactions
}
