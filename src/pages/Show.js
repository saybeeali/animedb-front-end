//import anime from "../sample_data";
import Comments from "../components/Comments";
import { Modal, Button } from "react-bootstrap";
import { HOSTNAME } from "../environment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

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

    
        // const url = new URL(link)
        // console.log(url)
        //     return (
        //         <>
        //             <Button variant="primary" onClick={handleShow}>
        //                 {/* Play Trailer */}
        //                 <img className="yt-icon" src="https://i.imgur.com/nhvu18j.png"></img>
        //             </Button>

        //             <Modal show={show} onHide={handleClose}>
        //                 <Modal.Title>{anime[id - 1].title}</Modal.Title>
        //                 <Modal.Body><iframe src={link} style={{ width: '100%', height: '400px' }} /></Modal.Body>
        //                 <Modal.Footer>
        //                     <Button variant="secondary" onClick={handleClose}>
        //                         Close
        //                     </Button>
        //                 </Modal.Footer>
        //             </Modal>
                    
        //         </>
        //     );
            
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
                        
                        //const link = anime[id - 1].trailer
                        
                        //will have to adjust these keys based on the actual returned object
                        return (
                            <div>
            <div className="show">
            
            
            <img src= {newAnime.images.jpg.image_url}/>
            <h1>{newAnime.title}</h1>
            <h2>{newAnime.title_japanese}</h2>
            <iframe src={newAnime.trailer.embed_url} width = '400' height ='300'/>
            <h3>{newAnime.rating}</h3>

                 
                 <p>{newAnime.synopsis}</p>
                 
                    <Reviews/>
            </div>
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
        