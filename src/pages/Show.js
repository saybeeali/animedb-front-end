

import { Modal, Button } from "react-bootstrap";
import { HOSTNAME } from "../environment";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";

function Show(props) {

    const { id } = useParams()
    const [newAnime, setNewAnime] = useState([])
    const thisAnimeURL = `https://animedb-back-end.herokuapp.com/anime/${id}`


    const getAnime = () => {
        fetch(thisAnimeURL)

            .then((res) => res.json())
            .then((json) => {

                setNewAnime(json)

            })
            .catch(console.error)
    }
    useEffect(() => {
        getAnime()

    }, [])


    const loading = () => {
        return (

            <h1>loading</h1>
        )
    }

    const loaded = () => {

        const showReviews = newAnime.reviews.map((review) => {
            return (
                <p>{review.post}</p>
            )
        })
        return (
            <div>
                <div className="show">


                    <img src={newAnime.images.jpg.image_url} />
                    <h1>{newAnime.title}</h1>
                    <h2>{newAnime.title_japanese}</h2>
                    <iframe src={newAnime.trailer.embed_url} width='400' height='300' />
                    <h3>{newAnime.rating}</h3>


                    <p>{newAnime.synopsis}</p>

                    <Reviews getAnime={getAnime} />
                    {showReviews}
                </div>
            </div>
        )

    }

    console.log(Object.keys(newAnime))
    return (
        <>
            {newAnime && Object.keys(newAnime).length ? loaded() : loading()}
        </>

    );

    <Footer />
}

export default Show;