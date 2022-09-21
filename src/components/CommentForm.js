import {useState} from "react"

function CommentForm(props) {

    const [newForm, setNewForm] = useState({
        username: "",
        content: "",
      });

    
      const addComment = async (commentData) => {
        try {
          const newComment = await fetch(props.commentsURL, {
            method: "post", headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
          }
          );
          props.getComments()
        } catch (err) {
          //console.log(err)
        }
      };

      const handleChange = (e) => {
        setNewForm({...newForm, [e.target.name]: e.target.value});
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault()
        const newComment = await addComment(newForm)
        setNewForm({username: "", content: ""})
      }

    return (
      <div className="CommentForm">
        <h3>Add a comment</h3>
        <form onSubmit={handleSubmit}>
            <input
                type="hidden"
                value={newForm.username}
                name="username"
                placeholder="username"
                onChange={handleChange}
            />
                <input
                type="text"
                value={newForm.content}
                name="content"
                onChange={handleChange}
            />
            <button className="comment-btn" type="submit">Add Comment</button>
        </form>
      </div>
    );
  }
  
  export default CommentForm;
  