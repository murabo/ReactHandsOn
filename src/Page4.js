import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page4 extends Component {
    render () {
        return(
            <div>
                <h1>sample 4</h1>
                <p>このクラスをstateless化してください。</p>
                <Link to={{ pathname: '/P5' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}
