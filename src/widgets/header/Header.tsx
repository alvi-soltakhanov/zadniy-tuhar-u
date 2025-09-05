import './Header.css'
import searchIcon from '../../images/searchicon.png'
import fav from '../../images/fav.png'
import basket from '../../images/basket.png'
import profile from '../../images/profile.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">Exclusive</div>
        <div className="nav">
            <ul>
                <li><Link className='active' to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
            </ul>
        </div>
        <div className="search">
            <div><input type="search" placeholder='What are you looking for?'/></div>
            <div><img src={searchIcon} alt="" /></div>
        </div>
        <div className="icons">
          <div className="favorite"><img src={fav} alt="" /></div>
          <div className="basket"><img src={basket} alt="" /></div>
          <div className="profile"><img src={profile} alt="" /></div>
        </div>
    </header>
  )
}

export default Header