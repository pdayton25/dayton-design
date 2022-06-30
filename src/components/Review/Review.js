import React from "react";

const Review = ({review}) => {
    return (
        <div className="card-content">
            <h1 className="name">{review.name}</h1>
            <p className="review-content">{review.content}</p>
            <p className="review-date">{review.date}</p>
        </div>
    );
};
export default Review;