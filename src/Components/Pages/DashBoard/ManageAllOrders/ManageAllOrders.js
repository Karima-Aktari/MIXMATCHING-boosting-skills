import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import { Spinner } from 'react-bootstrap';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const { isLoading } = useAuth();


    useEffect(() => {
        fetch('https://stormy-brushlands-89131.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    // Delete Order
    const handleDelete = id => {
        const proceed = window.confirm('Are You Sure To DELETE?');
        if (proceed) {
            const url = `https://stormy-brushlands-89131.herokuapp.com/deleteOrder/${id}`
            fetch(url, {
                method: "DELETE",
                headers: { "content-type": "application.json" }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('DELETE Successful')
                        const remaining = orders.filter(service => service._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    //Update orders
    const handleUpdate = (id) => {
        const proceed = window.confirm('Are you sure to shipped the order?');
        if (proceed) {
            const url = `https://stormy-brushlands-89131.herokuapp.com/orders/${id}`
            fetch(url, {
                method: "PUT",
                headers: { "content-type": "application.json" },
                body: JSON.stringify()
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount) {
                        alert('Shipped completed')
                    }

                })
        }
    }

    // Spinner setting
    if (isLoading) {
        return <Spinner animation="border" variant="warning" />
    };
    return (
        <div className='py-3'>
            <h2 className='text-green-600 font-bold text-4xl'>All Orders</h2>
            <div className="row text-center mx-auto">
                {orders?.map((order) => (
                    <div className="col-12 col-md-6 col-lg-6 py-3" key={order._id}>
                        <div className="border rounded-3 py-3 bg-dark h-full">
                            <img src={order?.order.img} className="w-75 rounded-3 mx-auto" alt="" />
                            <div className='py-2 text-xl'>
                                <h5 className='text-2xl'>{order?.name}</h5>
                                <h4 className='text-xl'>{order.email}</h4>
                                <h5 className='text-xl'>{order.address}</h5>
                                <h5 className='text-xl'>{order.city}</h5>
                                <h5 className='text-xl'>Mobile-No.:{order.phone}</h5>
                                <h5 className='text-xl'>Brand:{order?.order.name}</h5>
                                <h5 className='text-xl'>${order?.order.price}</h5>
                                <h6>Date:-{order?.date}</h6>
                            </div>
                            <button onClick={() => handleUpdate(order._id)} className="btn bg-warning mx-2 px-2">{order.status}</button>
                            <button onClick={() => handleDelete(order._id)} className="btn btn-danger px-4">Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageAllOrders;