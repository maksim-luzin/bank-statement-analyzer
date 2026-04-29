"use client"

import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from "react"
import { ITransaction } from "../model/types"

interface ITransactionsContext {
  transactions: ITransaction[] | undefined
  setTransactions: (newTransactions: ITransaction[]) => void
}

export const TransactionsContext = createContext<ITransactionsContext>({
  transactions: undefined,
  setTransactions: () => {},
})

export const TransactionsProvider: FC<PropsWithChildren<unknown>> = ({
  children,
}) => {
  const [transactions, _setTransactions] = useState<
    Array<ITransaction> | undefined
  >()

  const setTransactions = useCallback((newTransactions: ITransaction[]) => {
    _setTransactions(() => newTransactions)
  }, [])

  return (
    <TransactionsContext value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext>
  )
}
