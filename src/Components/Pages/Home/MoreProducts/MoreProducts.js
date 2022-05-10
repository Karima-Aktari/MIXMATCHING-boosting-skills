import React, { useEffect, useState } from 'react';
import MoreProduct from '../MoreProduct/MoreProduct';


const MoreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-brushlands-89131.herokuapp.com/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='py-4'>
            <h1 className='text-4xl'>Products Collection</h1>
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