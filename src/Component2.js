import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component2 extends Component {
    render () {
        return(
            <div>
                <h1>Component2</h1>
                <p>このクラスをstateless化してください。</p>
                <Link to={{ pathname: '/P6' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}
