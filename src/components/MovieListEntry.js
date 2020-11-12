import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'


function MovieListEntry(props) {
 
  return( 
    <Grid item lg= {2} md={4} xs={12}>
      <div style={{position: 'relative'}}>
        <a href={`/movie/${props.movieId}`}>
          <img style={{height:'320px'}} src={props.image} alt={props.movieName}/>
        </a>
      </div>
    </Grid>
  )
  
}

MovieListEntry.propTypes = {
  movieId:PropTypes.string,
  image:PropTypes.string,
  movieName:PropTypes.string,
}



export default MovieListEntry;
