import React from "react";
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'


function MovieListEntry(props) {
 
  return( 
    <>
    <Grid item lg= {2} md={4} xs={12}>
      <div style={{position: 'relative'}} onClick={props.onClick}>
          <img style={{height:'320px'}} src={props.image} alt={props.movieName}/>
      </div>
    </Grid>
   
    </>
  )
  
}

MovieListEntry.propTypes = {
  movieId:PropTypes.number,
  image:PropTypes.string,
  movieName:PropTypes.string,
  onClick:PropTypes.func,
}



export default MovieListEntry;
