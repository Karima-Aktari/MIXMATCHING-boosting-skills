import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-brushlands-89131.herokuapp.com/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="bg-dark text-white py-3">
            <h1>Product Collections {products.length}</h1>
            <div className="row mx-auto p-3 text-white">
                {
                    products?.slice(0, 3).map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
            <Link to={'/moreProducts'}><button className="btn btn-info">More Products</button ></Link>
        </div>
    );
};

export default Products;