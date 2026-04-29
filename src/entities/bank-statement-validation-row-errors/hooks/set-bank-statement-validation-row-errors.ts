import { useContext } from 'react';

import { BankStatementValidationRowErrorsContext } from '../providers';

export const useSetBankStatementValidationRowErrors = () => {
  const { setErrors } = useContext(BankStatementValidationRowErrorsContext);

  return setErrors;
};
