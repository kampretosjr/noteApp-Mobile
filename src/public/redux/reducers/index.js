import {combineReducers} from 'redux';

import reBuku from './book';
import reHistory from './history';
import reKategori from './kategori';

const appReducer = combineReducers({
  reBuku,
  reHistory,
  reKategori
});

export default appReducer;
