import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Component1 extends Component {
    render () {
        return(
            <div>
                <h1>Component1</h1>
                <p>下記のtableを、コンポーネント(class)化してください</p>
                <table>
                    <thead>
                    <tr>
                        <th>
                            タイトル
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            中身
                        </td>
                    </tr>
                    </tbody>
                </table>
            {/*SampleTable として定義・表示してください。 */}
                <Link to={{ pathname: '/P5' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}