import logo from './logo.svg';
import './App.css';

function Topbar() {
  return (
    <div>
        <table>
            <tr>
                <td><img src={"https://solv.com.br/wp-content/uploads/2020/05/logo@2x.png"} style={{width: 80 }} /></td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>
                <label>
                Name:
                <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
                </td>
            </tr>
        </table>
    </div>
  );
}

export default Topbar;