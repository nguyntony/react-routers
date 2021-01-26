import {Link} from 'react-router-dom'

function Nav() {
    return (
      <div className="Nav">
        <h3>Pokemon Logo</h3>
        <ul>
          <Link to='/'><li>Home</li></Link>
          <Link to='/about'><li>About</li></Link>
          <Link to='/shop'><li>Shop</li></Link>
        </ul>
      </div>
    );
  }
  
export default Nav;
  