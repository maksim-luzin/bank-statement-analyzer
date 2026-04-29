import { ITransaction } from '@/entities/transactions/model/types';

type ReplaceNumberToString<T> = {
  [K in keyof T]: T[K] extends number ? string | undefined : T[K] | undefined
};

export interface ITransactionConvertRowErrors extends ReplaceNumberToString<ITransaction> {
  row: number
};
