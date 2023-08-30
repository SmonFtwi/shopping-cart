
import './App.css'
import Home from './pages/homePage/home';
import NavBar from './component/navBar';
import{ useParams} from "react-router-dom"
import Store from './pages/StorePage/store';
import Cart from './pages/cartPage/cart';
import ProductDisplay from './pages/StorePage/productDisplay';
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
  ):name === "/productDisplay" ?(
    contentComponenet =<ProductDisplay/>
  ):
  (
    contentComponenet= <Home />
  )}

  return (
    <>
     
      <NavBar/>
      {contentComponenet}
      <Footer/>
    </>
  )
}

export default App
