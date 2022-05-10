import React from 'react';
import { Link } from 'react-router-dom';
import './MoreProduct.css';

const MoreProduct = ({ product }) => {
    const { _id, img, name, price, description } = product;
    return (
        <div className="col-12 col-md-4 p-4 product">
            <div>
                <img src={img} className="w-75 rounded-3 mx-auto" alt=""></img>
                <h2>{name}</h2>
                <h3>${price}</h3>
                <p className="px-4">{description}</p>
                <Link to={`/winter/${_id}`}><button className="btn btn-info my-1">Details</button></Link>
            </div>
        </div>
    );
};

export default MoreProduct;