import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            <ul style={{width:"200px", text:""}}>
                <li>
            <Link to={{ pathname: '/P1' }} className="mdl-navigation__link">stateの表示</Link>
                </li>
                <li>
            <Link to={{ pathname: '/P2' }} className="mdl-navigation__link">ライフサイクルの基礎</Link>
                </li>
                <li>
            <Link to={{ pathname: '/P3' }} className="mdl-navigation__link">コンポーネント化</Link>
                </li>
                <li>
            <Link to={{ pathname: '/P4' }} className="mdl-navigation__link">stateless化</Link>
                </li>
                <li>
            <Link to={{ pathname: '/P5' }} className="mdl-navigation__link">コンポーネントに処理をさせよう</Link>
                </li>
            </ul>
        </p>
      </div>
    );
  }
}



export default App;
