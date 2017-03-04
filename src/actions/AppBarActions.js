import {SHOW_SEARCHBAR, HIDE_SEARCHBAR} from './types';

export const showSearchBar = () =>{
  return{
    type: SHOW_SEARCHBAR
  };
};

export const hideSearchBar = () =>{
  return{
    type: HIDE_SEARCHBAR
  };
};
