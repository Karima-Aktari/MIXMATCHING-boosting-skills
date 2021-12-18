import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';


const MoreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>Winter Collections</h1>
            <div className="row mx-auto">
                {
                    products.map(product => <MoreProduct
                        key={product._id}
                        product={product}>
                    </MoreProduct>)
                }
            </div>
        </div>
    );
};

export default MoreProducts;