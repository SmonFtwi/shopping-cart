import './navBar.css'
import{Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
function NavBar(){
 
    return(
      <>
      <div className="header">
          <Link to= '/home' style={{ textDecoration: 'none', color: 'inherit' }}><h1 className="nav">
              I-MAX
          </h1>
          </Link>
          <div className="navBar">
              <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}><h2 className="nav">Home</h2> </Link>
              <Link to="/store" style={{ textDecoration: 'none', color: 'inherit' }}><h2 className="nav">Store</h2> </Link>
          </div>
          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
            <ShoppingCart size={32} className="nav"/>
          </Link>
      </div>
     
      </>
  )
   }

export default NavBar;