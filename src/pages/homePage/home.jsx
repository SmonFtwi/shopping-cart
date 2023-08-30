import './home.css'
import { useNavigate } from 'react-router-dom';

function Home(){
  const navigate = useNavigate();
  return(
    <>
    <div className="homeIntro">
    <h1>Welcome to I-MAX Electronics</h1>
    <p>Discover the latest in cutting-edge technology and electronics at I-MAX Electronics. We offer a wide range of high-quality products, from smartphones and laptops to smart home devices and gaming consoles.</p>
    <button className="shop-now-btn" onClick={() => navigate("/store")}>Shop Now</button>
  </div>

  </>
  )
}

export default Home;