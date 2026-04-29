'use client'
import { FC, Fragment } from 'react';

import { Separator } from '@/shared/ui/components';

interface ICounterpartyProps {
  counterparty: string;
  amount: number;
  index: number;
};

export const Counterparty: FC<ICounterpartyProps> = ({
  counterparty,
  amount,
  index,
}) => (
  <Fragment>
    <dl className='flex items-center justify-between'>
      <dt>{counterparty} </dt>
      <dd className='text-muted-foreground'> {Math.abs(amount)} </dd>
    </dl>
    {index < 4 ? <Separator /> : null}
  </Fragment>
)
