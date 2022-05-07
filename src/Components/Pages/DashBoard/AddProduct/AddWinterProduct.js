import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddWinterProduct.css';
import useAuth from '../../../Hooks/useAuth';

const AddWinterProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    const onSubmit = data => {
        axios.post('https://stormy-brushlands-89131.herokuapp.com/winter', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }

    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };
    return (
        <div className="addProduct bg-white p-4">
            <h1 className="text-secondary">Add a Latest Product</h1>
            <form className='border rounded-md bg-green-200 text-gray-700' onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="Image url" />
                <input className='rounded-full bg-purple-500 text-white' type="submit" />
            </form>
        </div>
    );
};

export default AddWinterProduct;