import React from 'react';
import Button from '../ui/Button/Button';
import right from '../../icons/SVG/chevron-right.svg';
import './_summary.scss';

const Summary = () => (
  <div className="Summary">
    <div className="Summary__item">
      <p className="Summary__item--label">overdue</p>
      <p className="Summary__item--value">£500</p>
      <Button small>
        View all
      </Button>
    </div>

    <div className="Summary__item">
      <p className="Summary__item--label">in draft</p>
      <p className="Summary__item--value">£3,400</p>
      <Button small>
        View all
      </Button>
    </div>

    <div className="Summary__item">
      <p className="Summary__item--label">total outstanding</p>
      <p className="Summary__item--value">£3,900</p>
      <Button small>
        View all
      </Button>
    </div>
  </div>
);

export default Summary;