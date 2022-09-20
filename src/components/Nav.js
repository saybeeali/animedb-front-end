
import {useState, useEffect} from "react"
import Login from "./Login"

//need to create a user log in somewhere (should it be here or a separate page?)
//either way, create a user login component and register component

function Nav(props) {


  const [currentUser, setCurrentUser] = useState(null)

  const backEndURL = ""

  const getUser = async () => {
      try {
          const response = await fetch(backEndURL)
          //console.log(response)
          const thisUser = await response.json()
          setCurrentUser(thisUser)
      } catch (err) {
          //console.log(err)
      }
  }

useEffect(() => {getUser()}, [])


  const noUser = () => {
      return (
          <h>Welcome</h>
      )
  }

  const user = (props) => {
          return (
            <div className="loginField">
              <p className="currentUser-display"> Welcome {currentUser}</p>
            </div>
      )
      console.log(currentUser)
    }
    
    
    return (
      <div className="currentUser-greeting">
      <Login setCurrentUser = {setCurrentUser}/>
      {currentUser ? user() : user()}
    </div>
  );
}

export default Nav;
  