 import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function Reviews(props) {

    const [reviews, setReviews] = useState([])

    const thisAnimeURL =`https://animedb-back-end.herokuapp.com/anime/${props.id}`

    useEffect(() => {
        fetch(thisAnimeURL)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setReviews(json)
        })
        .catch(console.error)
    }, [])
  

    function addReview(data) {
        setReviews([reviews,data])
    }
    //i think this will only work locally. we need to add it to the backend

    return (
        <div className='Reviews'>
            <h1>Reviews</h1>
                <ReviewForm addReview={addReview}/>
            
            
            <main><ReviewList reviews={reviews} /></main>
        </div>
    )
}
export default Reviews;

















