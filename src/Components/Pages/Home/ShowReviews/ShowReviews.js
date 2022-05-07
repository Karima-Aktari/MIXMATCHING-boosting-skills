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
        <div className=" bg-primary py-4 text-secondary mx-auto">
            <h1>Consumer reviews</h1>
            <div className="row mx-auto text-dark">
                {
                    reviews.map(review =>
                        <div key={review._id} className="col-12 col-md-6 col-lg-4 p-2">
                            <div className="bg-info rounded-3 py-3 w-100 mx-auto reviews h-100">
                                <h2>{review.name}</h2>
                                <h2>{review.email}</h2>
                                <h5>{review.description}</h5>
                                <h4>{review.date}</h4>
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



