import React, { useEffect, useState } from 'react';
import WinterCollection from '../WinterCollection/WinterCollection';

const WinterCollections = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/winter')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/deleteWinter/${id}`
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
        <div>
            <h1>Winter Collections</h1>
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