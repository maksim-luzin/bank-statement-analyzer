import { FC } from 'react';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from '@/shared/ui/components';
import { TransactionType } from '@/entities/transactions/model/consts';

interface ITypeFilter {
  transactionTypeFilter: (newType: TransactionType) => void;
  transactionTypeFilterValue: string;
}

export const TypeFilter: FC<ITypeFilter> = ({
  transactionTypeFilter,
  transactionTypeFilterValue,
}) => (
  <Select
    value={transactionTypeFilterValue}
    onValueChange={transactionTypeFilter}
  >
    <SelectTrigger className='w-full max-w-48'>
      <SelectValue placeholder='Вибери тип операції' />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>Тип операції</SelectLabel>
        { }
        <SelectItem value={TransactionType.All}>Усі</SelectItem>
        <SelectItem value={TransactionType.Income}>Доходи</SelectItem>
        <SelectItem value={TransactionType.Cost}>Витрати</SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
)
