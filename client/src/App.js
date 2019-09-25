import React from 'react';
import './app.scss';
import userImg from './tee.jpeg'

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="Nav">
          <div className="Nav__logo">Logo</div>
          <ul className="Nav__center">
            <li>Dashboard</li>
            <li>Providers</li>
            <li>Users</li>
            <li>Settings</li>
          </ul>
          <div className="Nav__action">
            <a className="Button" href="#">New Provider</a>
          </div>
          <div className="Nav__user">
            <img className="Nav__user-photo" src={userImg}/>
          </div>
        </nav>
        <div className="Summary">
          <div className="Summary__item">
            <p className="Summary__item--label">overdue</p>
            <p className="Summary__item--value">£500</p>
            <a className="Button Button__small" href="#">View all</a>
          </div>

          <div className="Summary__item">
            <p className="Summary__item--label">in draft</p>
            <p className="Summary__item--value">£3400</p>
            <a className="Button Button__small" href="#">View all</a>
          </div>

          <div className="Summary__item">
            <p className="Summary__item--label">total outstanding</p>
            <p className="Summary__item--value">£3900</p>
            <a className="Button Button__small" href="#">View all</a>
          </div>
        </div>
        <div>
          <div>Recent Transactions</div>
          <div>All Transactions</div>
        </div>
      </div>
    )
  }
}

export default App;