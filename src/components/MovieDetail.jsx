
function MovieDetail({details}){
  return <>
  <p><b>Actors :</b> {details.Actors}</p>
  <p><b>STORY :</b> {details.Plot}</p>
  <p><b>IMDB-Rating :</b> {details.imdbRating}</p>
  <p><b>Box Office Collections :</b> {details.BoxOffice}</p>
  <p><b>Awords :</b> {details.Awards}</p>
  </>
  };

export default MovieDetail;