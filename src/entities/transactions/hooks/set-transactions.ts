import { useContext } from "react"
import { TransactionsContext } from "../providers"

export const useSetTransactions = () => {
  const { setTransactions } = useContext(TransactionsContext);

  return setTransactions;
}
