import {useState,useEffect} from "react";
import store from 'store/store';

const Header = () => {
    const [count, setCount] = useState(store.count);
    useEffect(() => {
      store.subscribe(() => {
        setCount(store.count);
      });
    }, []);
    return (
      <div className="mui-appbar mui--appbar-line-height">
        <table width="100%">
          <tbody>
            <tr style={{ verticalAlign: 'middle' }}>
              <td
                className="mui--appbar-height mui--text-display1"
                style={{ paddingLeft: '1em' }}
              >
                Header
              </td>
              <td
                className="mui--appbar-height mui--text-display1"
                align="right"
                style={{ paddingRight: '1em' }}
              >
                  Cart Count - {count}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default Header;