import React, { useEffect, useState } from 'react';
import WinterCollection from '../WinterCollection/WinterCollection';

const WinterCollections = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stormy-brushlands-89131.herokuapp.com/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `https://stormy-brushlands-89131.herokuapp.com/deleteWinter/${id}`
        fetch(url, {
            method: "DELETE",
            headers: { "content-type": "application.json" }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are You Sure To DELETE')
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                }
            })
    }


    return (
        <div className='py-3 text-rose-900'>
            <h1 className='font-bold text-4xl'>All Products Collection</h1>
            <div className="row mx-auto">
                {
                    products.map(product => <WinterCollection
                        key={product._id}
                        product={product}
                        handleDelete={handleDelete}></WinterCollection>)
                }
            </div>
        </div>
    );
};

export default WinterCollections;