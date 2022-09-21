import anime from "../sample_data";
import Comments from "../components/Comments";
import { Modal, Button } from "react-bootstrap";
import { HOSTNAME } from "../environment";
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"


function Show() {

    const { id } = useParams()
    const [newAnime, setNewAnime] = useState(null)
    const thisAnimeURL = ""

    //once back end is deployed we can fill in the url
    //and use this function to fetch it

    const getThisAnime = async () => {
        try {
            const response = await fetch(thisAnimeURL)
            //console.log(response)
            const thisAnime = await response.json()
            setNewAnime(thisAnime)
        } catch (err) {
            //console.log(err)
        }
    }

    useEffect(() => { getThisAnime() }, [])

    const LinkWrapper = ({ link }) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const url = new URL(link)
        console.log(url)
            return (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Play Trailer
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Title>{anime[id - 1].title}</Modal.Title>
                        <Modal.Body><iframe src={link} style={{ width: '100%', height: '400px' }} /></Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
    }


    const loading = () => {
        return (
            <h1>loading</h1>
        )
    }

    const loaded = () => {
       const link = anime[id - 1].trailer
        //will have to adjust these keys based on the actual returned object
        return (
            <div className="Show">
                <h1>{anime[id - 1].title}</h1>
                <img src={anime[id - 1].image}></img>
                <p>medium: {anime[id - 1].medium}</p>
                <p>air dates: {anime[id - 1].air_dates}</p>
                {LinkWrapper({link})}
            </div>
        );
    }
    //down here we'll change anime to {either newAnime or thisAnime}
    return (
        <div className="show">
            {anime ? loaded() : loading()}
            <Comments />
        </div>
    );
}

export default Show;
