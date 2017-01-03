import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    render () {
        return(
            <div>
                <h1>sample 5</h1>
                下記の数値をインクリメントする処理を追加してください。
                <p>{this.state.value}</p>
                <AddButton value={this.state}/>
            </div>
        );
    }
}

const AddButton = ({value}) => (
    <button>add</button>
);


