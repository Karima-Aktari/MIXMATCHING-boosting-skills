import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../../Hooks/useAuth';
import './AddWinterPd.css';

const AddWinterPd = () => {
    const { register, handleSubmit, reset } = useForm();
    const { isLoading } = useAuth();

    const onSubmit = data => {
        axios.post('http://localhost:5000/cars', data)
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
        <div className="addProduct bg-light p-4">
            <h1 className="text-secondary pt-4">Add a Latest Winter Collections </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="text-light" {...register("name", { required: true, maxLength: 20 })} placeholder="Brand Name" />
                <textarea className="text-light" {...register("description")} placeholder="Description" />
                <input className="text-light" type="number" {...register("price")} placeholder="Price" />
                <input className="text-light" {...register("img")} placeholder="Image url" />
                <input className="text-light" type="submit" />
            </form>
        </div>
    );
};

export default AddWinterPd;