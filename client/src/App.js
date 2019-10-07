import React from 'react';
import './app.scss';
import userImg from './tee.jpeg';
import right from './icons/SVG/chevron-right.svg';
import plus from './icons/SVG/plus.svg';
import logo from './splitlogo.png';
import Table from './Table';

const columns = [
  {
    Header: '',
    accessor: 'img',
    Cell: ({ row }) => (
      <div>
        <img className="Nav__user-photo" src={userImg}/>
      </div>
    ),
  },
  {
    Header: 'Client',
    accessor: 'name',
  },
  {
    Header: 'Issue Date',
    accessor: 'date',
  },
  {
    Header: 'Due Date',
    accessor: 'due_date',
  },
  {
    Header: 'Status',
    accessor: 'status',
  },
  {
    Header: '',
    accessor: 'progress',
  },
];

const data = [
  {
    img: '',
    name: 'Maria Schmidt',
    id: '000045',
    date: '2019-07-20',
    due_date: '2019-01-20',
    amount: '3000',
    status: 'pending',
  },
  {
    img: '',
    name: 'Tunde Ganiy',
    id: '000045',
    date: '2019-08-08',
    due_date: '2019-01-20',
    amount: '3000',
    status: 'pending',
  },
  {
    img: '',
    name: 'John Doe',
    id: '000045',
    date: '2019-09-10',
    due_date: '2019-01-20',
    amount: '3000',
    status: 'pending',
  },
  {
    img: '',
    name: 'Jane Doe',
    id: '000045',
    date: '2019-09-20',
    due_date: '2019-01-20',
    amount: '3000',
    status: 'pending',
  },
  {
    img: '',
    name: 'Sam Smith',
    id: '000045',
    date: '2019-10-20',
    due_date: '2019-01-20',
    amount: '3000',
    status: 'pending',
  },
]

const App = () => (
  <div>
    <nav className="Nav">
      <div className="Nav__logo">
        <img src={logo} />
      </div>
      <ul className="Nav__center">
        <li>Dashboard</li>
        <li>Providers</li>
        <li>Users</li>
        <li>Settings</li>
      </ul>
      <div className="Nav__action">
        <a className="Button" href="#">
          <svg className="Button__icon">
            <use xlinkHref={plus}></use>
          </svg>
          New Provider
        </a>
      </div>
      <div className="Nav__user">
        <img className="Nav__user-photo" src={userImg}/>
      </div>
    </nav>
    <div className="Summary">
      <div className="Summary__item">
        <p className="Summary__item--label">overdue</p>
        <p className="Summary__item--value">£500</p>
        <a className="Button Button__small" href="#">
          View all
          <svg className="Button__small-icon">
            <use xlinkHref={right}></use>
          </svg>
        </a>
      </div>

      <div className="Summary__item">
        <p className="Summary__item--label">in draft</p>
        <p className="Summary__item--value">£3,400</p>
        <a className="Button Button__small" href="#">
          View all
          <svg className="Button__small-icon">
            <use xlinkHref={right}></use>
          </svg>
        </a>
      </div>

      <div className="Summary__item">
        <p className="Summary__item--label">total outstanding</p>
        <p className="Summary__item--value">£3,900</p>
        <a className="Button Button__small" href="#">
          View all
          <svg className="Button__small-icon">
            <use xlinkHref={right}></use>
          </svg>
        </a>
      </div>
    </div>
    <div>
      <div className="Recent-Transactions">
        <p className="Recent-Transactions__title">Recent Transactions</p>
        <div className="Recent-Transactions__body">
          <div className="Card">
            <div className="Card__body">
              <div>
                <p className="Card__body--name">Maria Schidmt</p>
                <p className="Card__body--amount">£3,400</p>
                <p className="Card__body--due">Due in 2 days</p>
              </div>
              <div className="Card__status Card__status--warning">Pending</div>
            </div>
            <div className="Card__action">
              View Invoice
              <svg className="Card__action--icon">
                <use xlinkHref={right}></use>
              </svg>
            </div>
          </div>
          
          <div className="Card">
            <div className="Card__body">
              <div>
                <p className="Card__body--name">Diane White</p>
                <p className="Card__body--amount">£500</p>
                <p className="Card__body--due">Due yesterday</p>
              </div>
              <div className="Card__status Card__status--error">Overdue</div>
            </div>
            <div className="Card__action">
              View Invoice
              <svg className="Card__action--icon">
                <use xlinkHref={right}></use>
              </svg>
            </div>
          </div>

          <div className="Card">
            <div className="Card__body">
              <div>
                <p className="Card__body--name">Stephanie Kelly</p>
                <p className="Card__body--amount">£5,200</p>
                <p className="Card__body--due">Due 16 days ago</p>
              </div>
              <div className=" Card__status Card__status--success">Paid</div>
            </div>
            <div className="Card__action">
              View Invoice
              <svg className="Card__action--icon">
                <use xlinkHref={right}></use>
              </svg>
            </div>
          </div>

        </div>
      </div>
      <div className="Transactions">
        <p>All Transactions</p>
        <Table columns={columns} data={data} />
      </div>
    </div>
  </div>
)

export default App;