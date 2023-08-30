import {useState, useEffect} from 'react'

 function ProductArray(){

const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        const filteredProducts = data.filter(product =>
          product.category === 'electronics' || product.category === 'smartphones'
        );
        setProducts(filteredProducts);
      })
      .catch(error => console.error(error));
  }, []);

  
  return { products }

}

export default ProductArray;