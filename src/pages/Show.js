import anime from "../sample_data";

function Show() {
    return (
      <div className="Show">
        <h1>{anime[0].title}</h1>
        <img src={anime[0].image}></img>
        <p>medium: {anime[0].medium}</p>
        <p>air dates: {anime[0].air_dates}</p>
        <a href={anime[0].traiiler} target="_blank" rel="noreferrer">Trailer</a>
      </div>
    );
  }
  
  export default Show;
  