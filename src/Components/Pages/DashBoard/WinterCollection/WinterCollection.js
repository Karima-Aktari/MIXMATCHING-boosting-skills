import React from 'react';

const WinterCollection = ({ product, handleDelete }) => {
    const { img, name, price, description } = product;
    return (
        <div className="col-12 col-md-4 p-4">
            <div>
                <img src={img} className="w-75 rounded-3" alt=""></img>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p className="px-4">{description}</p>
                <button onClick={() => handleDelete(product._id)} className="btn btn-danger px-4">Delete</button>
            </div>
        </div>
    );
};

export default WinterCollection;