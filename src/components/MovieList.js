import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView} from 'react-native';
import MovieItem from './MovieItem';

class MovieList extends Component{

  componentWillMount() {
    this.createDataSource(this.props.movies);
  }

  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component
    // will be rendered with
    // this.props is still the old set of props

    this.createDataSource(nextProps);
  }

  createDataSource({ movies }) {
    const ds = new ListView.DataSource({
      rowHasChanged:(r1,r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.movies);
  }

  renderRow(movie){
    return <MovieItem movie= {movie} />;
  }

  render(){
    return(
      <ListView
        enableEmptySections
        dataSource = {this.dataSource}
        renderRow = {this.renderRow}
      />
    );
  }
}

const mapStateToProps = state =>{
  console.log(state);
  const {movies} = state.movies;
  return {movies};
};

export default connect(mapStateToProps)(MovieList);
