import { Input } from '@/shared/ui/components';
import { ChangeEvent, FC } from 'react';

interface ISearchFilter {
  counterpartyOrDescriptionFilter: (
    e: ChangeEvent<HTMLInputElement, HTMLInputElement>
  ) => void;
  counterpartyOrDescriptionFilterValue: string;
}

export const SearchFilter: FC<ISearchFilter> = ({
  counterpartyOrDescriptionFilter,
  counterpartyOrDescriptionFilterValue,
}) => (
  <Input
    placeholder='Пошук по контрагенту або призначенню'
    value={counterpartyOrDescriptionFilterValue}
    onChange={counterpartyOrDescriptionFilter}
    className='w-sm'
  />
)
