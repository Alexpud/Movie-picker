import axios from 'axios';

export const fetchMovie = (title) =>{
  return(dispatch) =>{
    dispatch({type: 'FETCH_MOVIE'});
    axios.get('http://www.omdbapi.com/?t='+title+'&y=&plot=short&r=json')
      .then(response => {
         dispatch({type: 'FETCH_MOVIE_SUCCESS', payload: response.data});
      })
      .catch(error =>{
        return {error: error};
      });
  };
};
