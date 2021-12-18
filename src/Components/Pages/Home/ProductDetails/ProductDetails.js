import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './ProductDetails.css';
import { Spinner } from 'react-bootstrap';

const ProductDetails = () => {
    const { winterId } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { user, isLoading } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/winter/${winterId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const onSubmit = data => {
        data.order = product;
        data.status = "pending";
        data.date = new Date().toLocaleDateString();
        axios.post('http://localhost:5000/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    }

    return (
        <div className="bg-dark booking">
            <h1>Details {winterId} </h1>
            <div className="p-4 text-info">
                <img src={product.img} className="img-fluid w-75 rounded-3" alt=""></img>
                <h2>{product.name}</h2>
                <h5>$ {product.price}</h5>
                <p className="fw-bolder px-4 ">{product.description}</p>
            </div>
            <div className="bookingForm w-75">
                <h1>{user.displayName}</h1>
                <h2 className="text-info"> Place Your Order For {product.name}</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input defaultValue={user.displayName} {...register("name")} />
                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Phone Number" defaultValue="" {...register("phone")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default ProductDetails;