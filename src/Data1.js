import React, {Component} from 'react';
import { Link } from 'react-router';

const styles = {
    test: {
      width: "100%",
      whiteSpace: "normal",
      border: "1px solid #CCC",
      textAlign: "left",

      wordBreak: "break-all",
    }
};


const datas = {
  "太郎": {
    "国語": 100,
    "数学": 20,
    "理科": 15
  },
  "二郎": {
    "国語": 80,
    "数学": 75,
    "理科": 90
  },
  "花子": {
    "国語": 90,
    "数学": 20,
    "理科": 45
  },
};

export default class Data1 extends Component {

    render () {
      Object.keys(datas).map((key) => (console.log(datas[key])));
      let node = <p><b>exapmle</b></p>;
      return(
            <div>
                <h1>sample 10</h1>
              <p>下記の様に表示してください。</p>

              <table className="mdl-data-table">
                <thead>
                <tr>
                  <th>名前</th>
                  <th>国語</th>
                  <th>数学</th>
                  <th>理科</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <td>太郎</td>
                  <td>79</td>
                  <td>80</td>
                  <td>50</td>
                </tr>
                </tbody>
              </table>
              {node}
            </div>
        );
    }
}