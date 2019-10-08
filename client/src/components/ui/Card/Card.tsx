import React from 'react';
import right from '../../../icons/SVG/chevron-right.svg';
import './_card.scss'

interface IProps {
  name: string
  amount: string
  due_date: string
  status: string
}

const deriveCardStatusClassname = (status) => {
  if(status === 'pending') {
    return 'warning'
  }

  else if(status === 'overdue') {
    return 'error'
  }

  else if(status === 'paid') {
    return 'success'
  }
}

const Card = (props: IProps) => (
  <div className="Card">
    <div className="Card__body">
      <div>
        <p className="Card__body--name">{props.name}</p>
        <p className="Card__body--amount">{props.amount}</p>
        <p className="Card__body--due">{props.due_date}</p>
      </div>
      <div className={`Card__status Card__status--${deriveCardStatusClassname(props.status)}`}>{props.status}</div>
    </div>
    <div className="Card__action">
      View Invoice
      <svg className="Card__action--icon">
        <use xlinkHref={right}></use>
      </svg>
    </div>
  </div>
);

export default Card;