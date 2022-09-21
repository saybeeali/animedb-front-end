//import anime from "../sample_data";
import Comments from "../components/Comments";
import { Modal, Button } from "react-bootstrap";
import { HOSTNAME } from "../environment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


function Show() {

    const  {id} = useParams()
    const [newAnime, setNewAnime] = useState([])
    const thisAnimeURL = `https://animedb-back-end.herokuapp.com/anime/${id}`

    //once back end is deployed we can fill in the url
    //and use this function to fetch it

    useEffect(() => {
        fetch(thisAnimeURL)
        .then((res) => res.json())
        .then((json) => {
        
            setNewAnime(json)
           
        })
        .catch(console.error)
    }, [])
 

    // const LinkWrapper = ({ link }) => {
    //     const [show, setShow] = useState(false);
    //     const handleClose = () => setShow(false);
    //     const handleShow = () => setShow(true);

    //     const url = new URL(newAnime.trailer.embed_url)
    //     console.log(url)
    //         return (
    //             <>
    //                 <Button variant="primary" onClick={handleShow}>
    //                     Play Trailer
    //                 </Button>

    //                 <Modal show={show} onHide={handleClose}>
    //                     <Modal.Title>{newAnime.title}</Modal.Title>
    //                     <Modal.Body><iframe src={link} style={{ width: '100%', height: '400px' }} /></Modal.Body>
    //                     <Modal.Footer>
    //                         <Button variant="secondary" onClick={handleClose}>
    //                             Close
    //                         </Button>
    //                     </Modal.Footer>
    //                 </Modal>
    //             </>
    //         );
    // }


    const loading = () => (
       
            <h1>loading</h1>
        
    )

    const loaded = () => {
    //    const link = anime[id - 1].trailer
        //will have to adjust these keys based on the actual returned object
        return (
            <div className="show">
            {/* <section className="container">
                {newAnime.map((anime)=>{
                    return(
                        <img src= {anime.images.jpg.image_url}/>
                    )
                }
                )}
            </section> */}
            
            <img src= {newAnime.images.jpg.image_url}/>
            <h1>{newAnime.title}</h1>
            <h2>{newAnime.title_japanese}</h2>
            <h3>{newAnime.rating}</h3>
                 
                 <p>{newAnime.synopsis}</p>
                

            </div>
        )
           
    }
    //down here we'll change anime to {either newAnime or thisAnime}
    console.log(Object.keys(newAnime))
    return (
             <>
            {newAnime && Object.keys(newAnime).length ? loaded() : loading()}
            </>
        
    );

    }
export default Show;
   // const getAnime = async () => {
    //     try{
    //         const res = await fetch(thisAnimeURL)
    //         const data = await res.json()
    //         console.log(data)
    //         // setNewAnime(data.res[params])
    //         // console.log(data.res[params])
    //     } catch (error){
    //         console.log(error)
    //     }
    //   }
    
    //   useEffect(() =>{
    //     getAnime()
    //   }, [])
