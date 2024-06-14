import { useContext} from "react";
import { MovieContext } from '../contexts/MovieContext.jsx';
// @import 'node_modules/aos/src/sass/aos.scss';
function OptionList({handleSubmit}){
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
            <li key={option.imdbID} onClick={handleSubmit}><div><i className="fa-solid fa-magnifying-glass"></i>{option.Title}</div></li>)
        )
        }
       </ul>
     );
}
export default OptionList;