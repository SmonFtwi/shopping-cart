import './home.css'
import { useNavigate } from 'react-router-dom';
import  { useState } from 'react';
import image1 from '../../assets/image1.webp';

import image2 from '../../assets/image2.png'
import image3 from '../../assets/image3.jpg'

function Home(){
  const navigate = useNavigate();
  return(
    <>
    <div className="homeIntro">
    <h1>Welcome to I-MAX Electronics</h1>
    <p>Discover the latest in cutting-edge technology and electronics at I-MAX Electronics. We offer a wide range of high-quality products, from smartphones and laptops to smart home devices and gaming consoles.</p>
    <button className="shop-now-btn" onClick={() => navigate("/store")}>Shop Now</button>
    <ImageSlider/>
  </div>
    
  </>
  )
}



const images = [
    image1,
    image2,
    image3
];

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-button" onClick={prevSlide}>&lt;</button> {/* Use &lt; for "<" */}
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="slide-image"  />
      <button className="next-button" onClick={nextSlide}>&gt;</button> {/* Use &gt; for ">" */}
    </div>
  );
}



export default Home;