import Comment from "./Comment";
import CommentForm from "./CommentForm";
import {useState, useEffect} from "react"

function Comments() {

  const [commentsList, setCommentsList] = useState(null)

  const commentsURL = ""

  const getComments = async () => {
    try {
      const response = await fetch(commentsURL)
      //console.log(response)
      const allComments = await response.json()
      setCommentsList(allComments)
    } catch (err) {
      //console.log(err)
    }
  }
    
  useEffect(() => {getComments()}, [])


  const loading = () => {
    return (
      <h1>loading</h1> 
    )
  }


  const loaded = (props) => {
    return commentsList.map((comment, idx) => {
      return (
        <div className="comment">
          <Comment comment={comment}/>
        </div>
      )
    })
  }  
  
  
  return (
      <div className="Comments">
        <h1>This will be a list of comments</h1>
        <CommentForm />
        {commentsList && commentsList.length ? loaded() : loading ()}
      </div>
    );
  }
  
  export default Comments;
  