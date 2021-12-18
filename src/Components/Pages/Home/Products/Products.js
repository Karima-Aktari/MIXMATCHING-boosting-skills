import React, { useEffect } from 'react';
import { useState } from 'react';
import Product from '../Product/Product';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className="bg-dark py-4">
            <h1>Product Collections {products.length}</h1>
            <div className="row mx-auto p-4 text-white">
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