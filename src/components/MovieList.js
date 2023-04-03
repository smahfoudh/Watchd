import React from "react";
import { Link } from "react-router-dom";


const MovieList = (props) => { 
    if (!props.movies) {
        return <div>Loading...</div>;
      }
      
    return (    
        <div className='d-flex p-0'>
            {props.movies.map((movie, index)=> (    
                <div className=' image-container d-flex justify-content-start m-2' key={movie.id} > 
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}   style={{ maxWidth: "200px", maxHeight: "300px"}}
                    onError={(e) => {
                        e.target.onerror = null;
                        //e.target.parentNode.style.display = 'none';
                        e.target.parentNode.removeChild(e.target);
                    }}
                    alt=""
                    //if poster fails, dont display it at all, or use: alt={`${movie.title}`}
                    ></img>
    
                    <div className="overlay d-flax align-items-center justify-content-center">
                        
                    </div>   
                </div>  
            ))}
        </div>
    );
};


export default MovieList;