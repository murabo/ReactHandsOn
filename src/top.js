import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

const Top = () => (
          <div className="mgnl100" style={{margin:"0 auto", width:"400px", textAlign:"left"}}>
          <ul className="tree-menu">
            <li>
              state編
              <ul>
                <li>
                  <Link to={{ pathname: '/P1' }} className="mdl-navigation__link">stateの表示</Link>
                </li>
              </ul>
            </li>
            <li>
              ライフサイクル編
              <ul>
                <li>
                  <Link to={{ pathname: '/P2' }} className="mdl-navigation__link">ライフサイクルの基礎</Link>
                </li>
              </ul>
            </li>
            <li>
              コンポーネント編
              <ul>
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
            </li>
            <li>
              react-router編
              <ul>
                <li>
                  <Link to={{ pathname: '/P6' }} className="mdl-navigation__link">画面の追加</Link>
                </li>
                <li>
                  <Link to={{ pathname: '/P9' }} className="mdl-navigation__link">パス(階層)追加</Link>
                </li>
              </ul>
            </li>
            <li>
              CSS編
              <ul>
                <li>
                  <Link to={{ pathname: '/P10' }} className="mdl-navigation__link">styleの追加</Link>
                </li>
                <li>
                  <Link to={{ pathname: '/P12' }} className="mdl-navigation__link">styleの追加 Part2</Link>
                </li>
              </ul>
            </li>
            <li>
              基礎応用編
              <ul>
                <li>
                  <Link to={{ pathname: '/P13' }} className="mdl-navigation__link">データを表示</Link>
                </li>
              </ul>
            </li>
          </ul>
          </div>
);




export default Top;
