import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component5 extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }


    render () {
      console.log("parent render");
        return(
            <div>
                <h1>Component4</h1>
                <p>{this.state.value}</p>
                <View/>
            </div>
        );
    }
}

class View extends Component{
  render() {
    console.log("child render");
    return(
      <div>
        ここに、Component4のstateを表示させてください。
        <form >
          <input type="text" ref="text" id="text" />
          <input type="button" value="submit"/>
        </form>
      </div>
    );
  }
}

