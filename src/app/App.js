import React, { useState, useEffect, Fragment } from 'react'
import Navbar from './components/navbar'
import Products from './components/products'
import Cart from './components/cart'
import './styles/app.css'

//import products
import data from './data'

const App = () => {
    const [products, setProducts] = useState([...data])
    const [keyword, setKeyword] = useState('')

    useEffect(() => {
        const results = data.filter(
            (product) =>
                product.title.includes(keyword) ||
                product.brand.includes(keyword)
        )
        setProducts(results)
    }, [keyword])

    return (
        <Fragment>
            <Navbar setKeyword={setKeyword} />
            <div className='container app'>
                <Products products={products} />
                <Cart />
            </div>
        </Fragment>
    )
}

export default App
