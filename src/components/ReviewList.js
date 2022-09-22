
import ReviewItem from "./ReviewItem";

function ReviewList(props) {


    return (
        <>
        {props.reviews.map((review, index) => {
            return (<ReviewItem review={review} id = {index}/>)
        }
        
        
        )}
        </>
    )
}
export default ReviewList