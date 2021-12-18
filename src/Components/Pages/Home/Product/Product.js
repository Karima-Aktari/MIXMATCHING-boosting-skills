import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, img, name, description } = product;
    return (
        <div className="col-12 col-md-4 p-2 product">
            <div>
                <img src={img} className="w-75 rounded-3" alt=""></img>
                <h2>{name}</h2>
                <p className="px-4">{description}</p>
                <Link to={`/winter/${_id}`}><button className="btn btn-info">Details</button></Link>
            </div>
        </div>
    );
};

export default Product;