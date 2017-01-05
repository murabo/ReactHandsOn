import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'sample1'
        }
    }

    render () {
        return(
            <div>
                <h1>State 1</h1>
                stateのvalueの値を表示しましょう。
                <p>{/*ここに表示させてください。*/}</p>
                <Link to={{ pathname: '/P2' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}