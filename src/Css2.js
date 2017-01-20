import React, {Component} from 'react';
import { Link } from 'react-router';

const styles = {
  p: {
    backgroundColor: "#c9e9ef"
  },
};

export default class Css2 extends Component {

    render () {
        return(
            <div>
                <h1>sample 9</h1>
              <p style={styles.p}>このテキストを赤字にしてみましょう</p>

            </div>
        );
    }
}