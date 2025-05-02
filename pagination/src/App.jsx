import { useEffect, useState } from 'react'

import './App.css'
import ProductData from './components/Product'

function App() {
  const [product, setProduct] = useState([])

 useEffect(()=>{
  fetchData()
 },[])

  const fetchData = async() => {
    const data = await fetch("https://dummyjson.com/products")
    const jsondata = await data.json()
    setProduct(jsondata.products)
    
  }
  return !product.length ? <h1>Loading...</h1>  :(
  <div className='app'>
   <div className='product-container'>
     {product.map(p=> <ProductData key={p.id} image={p.thumbnail} title={p.title}></ProductData>)}
   </div>
  </div>
  )
}

export default App
