import { useEffect, useState } from 'react'
import PageThumbnail from "../components/PageThumbnail";
import ProductCard from '../components/ProductCard';
import "../sass/Products.scss";


function Products() {

  let [products, setProducts] = useState()
  let [filter, setFilter] = useState()

  useEffect(() => {
    fetch("https://o9r077mr.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22product%22%5D%20%7Btitle%2Cdescription%2C'imageUrl'%3Aimage.asset-%3Eurl%2C'category'%3Acategories-%3Ename%7D")
      .then(response => response.json())
      .then(data => setProducts(data.result))
  }, [])

  function productsHandler(products, filter) {
    if (products) {
      if (filter) return products.filter(item => item.category == filter)
      else return products
    }
  }

  function BtnClickHandler(e) {
    document.querySelectorAll('.products .control button').forEach((btn)=>{btn.classList.add('disabled')})
    e.target.classList.remove('disabled')
    setFilter(e.target.getAttribute('btn-data'))
  }


  return (
    <>
      <PageThumbnail title={'NOS PRODUITS'} />
      <main className="products">
        <div className="control">
          <button onClick={BtnClickHandler} btn-data={''}  >All</button>
          <button onClick={BtnClickHandler} btn-data={'irrigation'} >irrigation</button>
          <button onClick={BtnClickHandler} btn-data={'pompage'} >pompage</button>
          <button onClick={BtnClickHandler} btn-data={'energie solaire'} >energie solaire</button>
          <button onClick={BtnClickHandler} btn-data={'agroforniture'} >agroforniture</button>
        </div>
        <div className="products-list">
          {products && productsHandler(products, filter).map((product,i) => <ProductCard key={i} data={product}>hello</ProductCard>)}
        </div>
      </main>
    </>)
}

export default Products