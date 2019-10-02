import React from 'react';
import '../App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import MovieItem from './MovieItem';

class Movies extends React.Component{

    
    render(){
        return this.props.MyMovies.map((movie) =>
        {
            console.log(movie);
           return <MovieItem movie={movie}></MovieItem>

            //console.log("item");//this is to see if its printing out two objects
        });
    }
}

export default Movies;