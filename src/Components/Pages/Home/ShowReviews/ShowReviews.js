import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import './ShowReviews.css';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);

    //Show Reviews
    useEffect(() => {
        fetch('https://stormy-brushlands-89131.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="bg-fuchsia-900 py-4 text-secondary mx-auto">
            <h1 className='text-light text-4xl'>Consumer reviews</h1>
            <div className="row mx-auto text-dark">
                {
                    reviews.map(review =>
                        <div key={review._id} className="col-12 col-md-6 col-lg-4 p-2">
                            <div className="bg-light rounded-3 p-3 w-100 mx-auto reviews h-100">
                                <h2 className='text-2xl'>{review.name}</h2>
                                <h2 className='text-2xl'>{review.email}</h2>
                                <h5 className='text-xl'>{review.description}</h5>
                                <h5 className='text-xl'>{review.date}</h5>
                                <p className=" mb-1 fs-5">
                                    <Rating initialRating={review.rating} emptySymbol="far fa-star text-warning"
                                        fullSymbol="fas fa-star text-warning" readonly>
                                    </Rating>
                                </p>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default ShowReviews;



