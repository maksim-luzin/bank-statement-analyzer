'use client'

import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useState,
} from 'react';
import { ITransactionConvertRowErrors } from '../model/types';

interface IBankStatementValidationRowErrorsContext {
  errors: ITransactionConvertRowErrors[] | undefined;
  setErrors: (newErrors: ITransactionConvertRowErrors[]) => void;
};

export const BankStatementValidationRowErrorsContext = createContext<IBankStatementValidationRowErrorsContext>({
  errors: undefined,
  setErrors: () => { },
});

export const BankStatementValidationRowErrorsProvider: FC<PropsWithChildren<unknown>> = ({
  children
}) => {
  const [errors, _setErrors] = useState<ITransactionConvertRowErrors[] | undefined>();

  const setErrors = useCallback((newErrors: ITransactionConvertRowErrors[]) => {
    _setErrors(() => newErrors)
  }, []);

  return (
    <BankStatementValidationRowErrorsContext value={{ errors, setErrors }}>
      {children}
    </BankStatementValidationRowErrorsContext>
  )
}
