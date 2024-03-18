import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../content/CartContext'
const Navbar = () => {
  const {cartItems }= useCart()
  return (
    <>
    <div className="navSection">
    <Link to='/' className="custom-link">
  <div className="title">
    <h2>E-Mart</h2>
  </div>
</Link>
      <div className="search">
        <input type="text" placeholder='search...'/>
      </div>
      <div className="user">
        <div className="userDetailes">
          signIn/signUp
        </div>
        <Link to='/cart'>
          <div className="cart">Cart
          <span>
          {cartItems.length}
          </span>
          </div>
          </Link>
      </div>
      
    </div>
    <div className="subMenu">
        <ul>
          <Link to="/mobile">
          <li>Mobiles</li>
          </Link>
          <Link to="/computers"><li>Computers</li></Link>
          <Link to="/watches"> <li>Watches</li></Link>
          <Link to="/tv"><li>Tv</li>
          </Link>
          <Link to="/ac"><li>Ac</li></Link>
          <Link to="/fridge"><li>Fridge</li></Link>
          <Link to="/furniture"><li>Furnicher</li></Link>
          <Link to="/kitchen"><li>Kitchen</li></Link>
          <Link to="/men"> <li>Men</li></Link>
          <Link to="/women"><li>Women</li></Link>
          <Link to="/books"> <li>Books</li></Link>
         
          
          
          
          
          
          
         
        </ul>
      </div>
   </> 
  )
}

export default Navbar