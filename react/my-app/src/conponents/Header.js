import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='logo'>
        <h3>アニメファンド</h3>
      </div>
      <nav>
        <ul>
            <li>
                <Link to="/">ログイン</Link>
            </li>
            <li>
                <Link to ='/blog'>会員登録</Link>
            </li>
            
                
            
        </ul>
      </nav>
    </header>
  );
}

export default Header