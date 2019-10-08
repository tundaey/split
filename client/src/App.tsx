import React from 'react';
import './app.scss';
import userImg from './tee.jpeg';
import right from './icons/SVG/chevron-right.svg';
import logo from './splitlogo.png';
import Table from './components/Table/Table';
import Nav from './components/Nav/Nav';
import Summary from './components/Summary/Summary';
import RecentTransactions from './components/RecentTransactions/RecentTransactions';

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

interface Data {
  img: string,
  name: string,
  id: string,
  date: string,
  due_date: string,
  amount: string,
  status: string,
}

const data: Data[] = [
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
    <Nav/>
    <Summary/>
    <RecentTransactions/>
    <div>
      <div className="Transactions">
        <p>All Transactions</p>
        <Table columns={columns} data={data} />
      </div>
    </div>
  </div>
)

export default App;