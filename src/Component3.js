import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component3 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    render () {
        return(
            <div>
                <h1>Component3</h1>
                下記の数値をインクリメントする処理を追加してください。
                <p>{this.state.value}</p>
                <AddButton value={this.state}/>
              <Link to={{ pathname: '/P7' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}

const AddButton = ({value}) => (
    <button>add</button>
);


