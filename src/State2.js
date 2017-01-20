import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'State2'
        }
    }

    render () {
        return(
            <div>
                <h1>State 2</h1>
                stateにKeyとして「value2」を「null」で宣言し、値に「test」を設定して表示しましょう。
                <p>{this.state.value2}</p>
                <Link to={{ pathname: '/P3' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}