import React from 'react';
import './app.scss';

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
          <a href="#">New Provider</a>
          <div className="Nav__user">
            <img className="Nav__user-photo" src="#"/>
            <span className="Nav__user-name">Tunde</span>
          </div>
        </nav>
        <div>Summary</div>
        <div>
          <div>Recent Transactions</div>
          <div>All Transactions</div>
        </div>
      </div>
    )
  }
}

export default App;