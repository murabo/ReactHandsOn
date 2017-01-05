import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component5A extends Component {
    constructor(props){
        super(props);
        this.state = {
            value:0
        }
    }
    handleClick(text) {
      this.setState({value:text});
    }

    render () {
      console.log("parent render");
        return(
            <div>
                <h1>Component4</h1>
                <p>{this.state.value}</p>
                <View onSubmit={this.handleClick.bind(this)}/>
            </div>
        );
    }
}

class View extends Component{
  handleClick(e) {
    this.props.onSubmit(this.refs.text.value);
  }

  render() {
    console.log("child render");
    return(
      <div>
        ここに、Component4のstateを表示させてください。
        <form >
          <input type="text" ref="text" id="text" />
          <input type="button" onClick={this.handleClick.bind(this)} value="submit"/>
        </form>
      </div>
    );
  }
}

