import {useState, useEffect} from "react"


function Nav() {


  const [currentUser, setCurrentUser] = useState(null)

  const backEndURL = ""

  const getUser = async () => {
      try {
          const response = await fetch(backEndURL)
          console.log(response)
          const thisUser = await response.json()
          setCurrentUser(thisUser)
      } catch (err) {
          console.log(err)
      }
  }

useEffect(() => {getUser()}, [])


  const loading = () => {
      return (
          <h>loading</h>
      )
  }

  const loaded = (props) => {
          return (
              <p className="currentUser-display"> Hello {currentUser}</p>
      )
  }


return (
    <div className="currentUser-greeting">
      {currentUser ? loaded() : loading()}
    </div>
  );
}

export default Nav;
  