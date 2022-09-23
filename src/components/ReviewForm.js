import React, { useState } from 'react';


function ReviewForm(props) {
  const [reviewState, setReviewState] = useState('');



  const handleChange = event => {
    setReviewState(event.target.value);
  }

  const handleSave = (event) => {
    event.preventDefault();

    console.log(reviewState)
    props.createReview(reviewState)
  }
  return (
    <div className="review-form">
      <h1>Add a Review</h1>
      <form onSubmit={handleSave}>

        <input

          type='text'
          name='reviews'
          onChange={handleChange}
          value={reviewState}
        />
        <input type='submit' value='Add Review' />

      </form>

    </div>
  )

}

export default ReviewForm;


















