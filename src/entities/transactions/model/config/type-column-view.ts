// import { TransactionType } from '../consts';

import { TransactionType } from "../consts"

export const getTypeColumnView = (amount: number) =>
  amount > 0
    ? TransactionType.Income
    : amount < 0
      ? TransactionType.Cost
      : "";
