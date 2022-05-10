import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    const onSubmit = data => {
        data.date = new Date().toLocaleDateString();
        axios.post('https://stormy-brushlands-89131.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Successfully');
                    reset();
                }
            })
    }


    return (
        <div className='bg-rose-400 h-100 py-4'>
            <h2 className='text-dark text-4xl font-bold'>Give Your Valuable Opinions</h2>
            <form className="py-2 my-4" onSubmit={handleSubmit(onSubmit)}>
                <input className="w-50 text-center rounded-3 py-2 border-0" defaultValue={user.displayName} {...register("name")} /><br />

                <input className="w-50 text-center rounded-3 my-3 py-2 border-0" defaultValue={user.email} {...register("email", { required: true })} /><br />

                {/* <input className="w-50 text-center rounded-3 py-2 border-0" placeholder="Photo" type="text"{...register("img", { required: true })} /><br /> */}

                <input className="w-50 text-center rounded-3 my-3 py-2 border-0" placeholder="Rating" type="number"{...register("rating", { required: true, min: "0", max: "5" })} /><br />

                <input className="w-50 text-center rounded-3 py-3 border-0" placeholder="Description" defaultValue="" {...register("description")} /><br />
                <input className="px-6 py-1 text-lg font-bold my-3 bg-fuchsia-600 text-white rounded-pill w-40" type="submit" />
            </form>
        </div>
    );
};

export default Reviews;


