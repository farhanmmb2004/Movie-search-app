
function MovieDetail({details}){
  return <>
    <hr />
  <img src={details.Poster} />
  <p><b>Actors :</b> {details.Actors}</p>
  <p><b>STORY :</b> {details.Plot}</p>
  <p><b>IMDB-Rating :</b> {details.imdbRating}</p>
  <p><b>Box Office Collections :</b> {details.BoxOffice}</p>
  <p><b>STORY :</b> {details.Awards}</p>
  <hr />
  </>
  };

export default MovieDetail;