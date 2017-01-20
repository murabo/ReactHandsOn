import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component4 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    render () {
        return(
            <div>
                <h1>Component4</h1>
                <p>{this.state.value}</p>
                <View/>
              <Link to={{ pathname: '/P8' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}

class View extends Component{
  render() {
    return(
      <div>
        ここに、Component4のstateを表示させてください。
        <p>{/*ここに宣言してください*/}</p>
      </div>
    );
  }
}

