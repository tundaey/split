import React from 'react';
import Card from '../ui/Card/Card';
import right from '../../icons/SVG/chevron-right.svg';
import './_recent-transactions.scss';

const cards = [
  {
    name: 'Maria Schidmt',
    amount: '£3,400',
    due_date: 'Due in 2 days',
    status: 'pending'
  },
  {
    name: 'Diane White',
    amount: '£500',
    due_date: 'Due yesterday',
    status: 'overdue'
  },
  {
    name: 'Stephanie Kelly',
    amount: '£5,200',
    due_date: 'Due 16 days ago',
    status: 'paid'
  },
]

const RecentTransactions = () => (
  <div className="Recent-Transactions">
    <p className="Recent-Transactions__title">Recent Transactions</p>
    <div className="Recent-Transactions__body">
      {cards.map(card => (
        <Card
          key={card.name}
          name={card.name}
          amount={card.amount}
          due_date={card.due_date}
          status={card.status}
        />
      ))}
    </div>
  </div>
)

export default RecentTransactions;