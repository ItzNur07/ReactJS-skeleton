import React, {useState , useEffect}  from 'react'
import SkeletonProduct from './skeleton/SkeletonProduct.js'

const Products = () => {

  const[products , setProducts] = useState([])
  const[loader , setLoader] = useState(false)

  useEffect(()=> {
  	setLoader(true)
  	setTimeout(async () => {
  		const res = await fetch('https://fakestoreapi.com/products')
  		const data = await res.json()
  		setLoader(false)
  		setProducts(data)
  	}, 4000)
  },[])

	return (
		<div className="container">
			<div className="row mt-5">
				{!loader ? products.map((product)=> (
					<div className="col-md-4" key={product.id}>
						<img className="product-img mb-3" src={product.image} alt="shop" />
						<div className="product-title mb-3">{product.title.slice(0, 35)}</div>
						<div className="product-price mb-2">${product.price}</div>
						<button className="btn btn-dark mb-3">Buy Now</button>
					</div>
				)) : [1,2,3,4,5,6,7,8,9].map((loading) => (
					<div className="col-md-4">
						<SkeletonProduct />
					</div> ))}
			</div>
		</div>
	)
}

export default Products