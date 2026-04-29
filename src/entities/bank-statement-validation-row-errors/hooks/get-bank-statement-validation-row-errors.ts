import { useContext } from 'react';
import { BankStatementValidationRowErrorsContext } from '../providers';

export const useGetBankStatementValidationRowErrors = () => {
  const { errors } = useContext(BankStatementValidationRowErrorsContext);

  return errors;
};
