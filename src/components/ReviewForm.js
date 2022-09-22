import React, { useState, useContext } from 'react';
import { DataContext} from '../data/DataContext';


function ReviewForm(props){
    const [reviewState,setReviewState] = useState('');
    const user = useContext(DataContext);
console.log(user)

    const handleChange = event => {
        setReviewState(event.target.value);
    }

        const handleSave = (event) => {
            event.preventDefault();
         
          console.log(reviewState)
          props.addReview(reviewState)
        }
        return(
            <div className="review-form">
              <h1>Add a Review</h1>
            <form onSubmit={handleSave}>
            
            <input 
            
            type='text'
            requird name='review'
            onChange={handleChange}
             value={reviewState}
            />
            <input type= 'submit' value = 'Add Review'/>
           
          </form>
          
          </div>
        )

      }
    
      export default ReviewForm;


















