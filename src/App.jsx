
import './App.css'
import Home from './pages/homePage/home';
import NavBar from './component/navBar';
import{ useParams} from "react-router-dom"
import Store from './pages/StorePage/store';
import Cart from './pages/cartPage/cart';
import Footer from './component/footer';


function App() {
  const { name } = useParams();
  let contentComponenet ;
  {name === "home" ? (
    contentComponenet= <Home />
  ) : name === "store" ? (
    contentComponenet= <Store />
  ) :name === "cart" ?(
    contentComponenet =<Cart/>
  )
  :
  (
    contentComponenet= <Home />
  )}

  return (
    <>
     
      <NavBar/>
      <div className='mainContent'> {contentComponenet}</div>
      <Footer/>
    </>
  )
}

export default App
