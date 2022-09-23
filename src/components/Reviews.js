import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import { useParams } from "react-router-dom";

function Reviews(props) {

    const [reviews, setReviews] = useState([])

    function addReview(data) {
        setReviews([reviews,data])
    }
    const  id = useParams()
    const animeUrl = `https://animedb-back-end.herokuapp.com/anime/${id.id}`
    console.log(id.id)


    const createReview = async (reviewData) => {
        console.log(reviewData)
        try {
        const newReview = await fetch (animeUrl, {
            method: "POST", 
            mode: 'cors',
            headers : {
                "Content-Type": "application/json", 
                'Access-Control-Allow-Origin' : "*"
            },
            body: JSON.stringify({
                post:reviewData
            }),
        });
        console.log(await newReview.json)
        props.getAnime()
    } catch (err) {
        console.log(err)
    }
};

    return (
        <div className='Reviews'>
            <h1>Reviews</h1>
                <ReviewForm createReview={createReview}/>
            
            
            <main><ReviewList reviews={reviews} /></main>
        </div>
    )
}
export default Reviews;

















