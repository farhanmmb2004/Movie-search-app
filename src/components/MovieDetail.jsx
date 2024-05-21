
function MovieDetail({details}){
  return <div className="details">
    <hr />
  {/* <img src={details.Poster} class="img-fluid" /> */}
  <p><b>Actors :</b> {details.Actors}</p>
  <p><b>STORY :</b> {details.Plot}</p>
  <p><b>IMDB-Rating :</b> {details.imdbRating}</p>
  <p><b>Box Office Collections :</b> {details.BoxOffice}</p>
  <p><b>Awords :</b> {details.Awards}</p>
  <hr />
  </div>
  };

export default MovieDetail;