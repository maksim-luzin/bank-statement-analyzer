import { FC } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/shared/ui/components';

interface ITotalCard {
  name: string
  totalAmount: number
  color?: string
};

export const TotalCard: FC<ITotalCard> = ({
  name,
  totalAmount,
  color = '',
}) => {
  return (
    <Card size='sm' className='flex-grow-1'>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className={`${color}`}>{totalAmount}</CardContent>
    </Card>
  )
}
