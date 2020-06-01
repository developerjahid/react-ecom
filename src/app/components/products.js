import React from 'react'
import { Button } from 'reactstrap'

const Product = ({ id, title, brand, price, image_url }) => {
    return (
        <div key={id} className='product'>
            <img src={image_url} alt={title} />
            <div className='details'>
                <span>{title}</span>
                <span>{brand}</span>
            </div>
            <div className='actions'>
                <span>$ {price}</span>
                <Button size='sm' color='danger'>
                    Add to cart
                </Button>
            </div>
        </div>
    )
}

const Products = ({ products }) => {
    return (
        <div className='product-list'>
            {products.map((product) => (
                <Product {...product} />
            ))}
        </div>
    )
}

export default Products
