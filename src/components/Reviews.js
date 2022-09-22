 import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState, useEffect } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function Reviews(props) {

    const [reviews, setReviews] = useState([])

    const thisAnimeURL =`https://animedb-back-end.herokuapp.com/anime/${props.id}`

    
    const getReviews = async () => {
        try {
            const response = await fetch(thisAnimeURL)
            const allReviews = await response.json()
            setReviews(allReviews.reviews)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {getReviews()}, [])

    // useEffect(() => {
    //     fetch(thisAnimeURL)
    //     .then((res) => res.json())
    //     .then((json) => {
    //         console.log(json)
    //         setReviews(json.reviews)
    //         console.log(json.reviews)
    //     })
    //     .catch(console.error)
    // }, [])
  

    // function addReview(data) {
    //     setReviews([reviews,data])
    // }
    //i think this will only work locally. we need to add it to the backend

    //add reviews  to backend

    const createReview = async (reviewData) =>  {
        try {
            const newReview = await fetch(thisAnimeURL, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(reviewData)
            })
            getReviews()
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className='Reviews'>
            <h1>Reviews</h1>
                <ReviewForm />
            
            
            <main><ReviewList reviews={reviews} /></main>
        </div>
    )
}
export default Reviews;

















