import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'sample1'
        }
    }
    componentDidMount() {
        this.setState({value:'sample2'});
    }
    render () {
        console.log('renderの処理です。');
        return(
            <div>
                <h1>sample 2</h1>
                <p>デベロッパーツールで、コンソールを確認すると、【renderの処理です。】が２回表示されます。</p>
                <p>問題を解消し、１度しか表示されないように変更してください。</p>
                <Link to={{ pathname: '/P3' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}