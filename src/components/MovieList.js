import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListView, View} from 'react-native';
import MovieItem from './MovieItem';
import AppBar from './AppBar';
class MovieList extends Component{


  renderList(){
    if(this._mounted){
      return(
        <ListView
          removeClippedSubviews={false}
          dataSource = {this.dataSource}
          renderRow = {this.renderRow}
          scrollRenderAheadDistance = {1800}
        />
      );
    }
    return <View> </View>;
  }

  componentWillMount() {
    this._mounted = true;
    this.createDataSource(this.props.movies);
  }

  componentWillUnmount(){
    this._mounted = false;

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
    return (
      <View style= {{backgroundColor: '#DFDFDF'}}>
        {this.renderList()}
      </View>
    );
  }
}

const mapStateToProps = state =>{
  const {movies} = state.movies;
  return {movies};
};

export default connect(mapStateToProps)(MovieList);
