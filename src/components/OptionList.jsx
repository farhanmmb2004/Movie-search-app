import { useContext, useState } from "react";
import { MovieContext } from '../contexts/MovieContext.jsx';
function OptionList({query,setQuery,handleSubmit}){
    const {options,showOptions} = useContext(MovieContext);
    if (options.Response !== "True"||showOptions===false) {
     return (
         <>
         </>
     );
    }
    return(
       <ul data-aos="fade-down">
        {
           options.Search.slice(0,5).map(option=>(
            <li key={option.imdbID} onClick={handleSubmit}><p>{option.Title}</p></li>)
        )
        }
       </ul>
     );
}
export default OptionList;