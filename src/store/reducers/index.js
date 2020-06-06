import { combineReducers } from 'redux';

import cart from './cart/reducer';
import modal from './modal/reducer';
import products from './products/reducer';

export default combineReducers({
  cart,
  modal,
  products,
});
