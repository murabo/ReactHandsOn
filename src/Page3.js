import React, {Component} from 'react';
import { Link } from 'react-router';

export default class Page3 extends Component {
    render () {
        return(
            <div>
                <h1>sample 3</h1>
                <p>下記のSampleTableを、コンポーネント化してください</p>
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
                <Link to={{ pathname: '/P4' }} className="mdl-navigation__link">次へ</Link>
            </div>
        );
    }
}