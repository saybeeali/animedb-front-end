import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function Reviews() {

    const [reviews, setReviews] = useState([])

    function addReview(data) {
        setReviews([reviews,data])
    }

    return (
        <div className='Reviews'>
            <h1>Reviews</h1>
                <ReviewForm addReview={addReview}/>
            
            
            <main><ReviewList reviews={reviews} /></main>
        </div>
    )
}
export default Reviews;

















