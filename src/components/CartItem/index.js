import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';

import { formatPrice } from '../../utils/format';
import {
  updateProductAmount,
  removeFromCart
} from '../../store/reducers/cart/actions';

export default ({ item }) => {
  const dispatch = useDispatch();
  const increment = useCallback(
    product => {
      dispatch(updateProductAmount(product.sku, product.amount + 1));
    }, [dispatch],
  );

  const decrement = useCallback(
    product => {
      dispatch(updateProductAmount(product.sku, product.amount - 1));
    }, [dispatch],
  );

  const remove = useCallback(
    id => {
      dispatch(removeFromCart(id));
    }, [dispatch],
  );

  return (
    <div className="item__container">
      <figure>
        <img className="item__image" src={item.image_url} alt={item.name} />
        <button type="button" onClick={() => remove(item.sku)}>
          Excluir item
        </button>
      </figure>

      <div className="item__data">
        <span className="item__title">{item.name}</span>
        <span className="item__size">Tamanho: {item.size}</span>
        <div className="item__price">
          {item.discount_percentage && (
            <span className="item__discount">{item.regular_price}</span>
          )}
          <span>{item.actual_price}</span>
          <span>{item.installments}</span>
        </div>

        <div className="item__amount">
          <div>
            <button type="button" onClick={() => decrement(item)}>
              <i className="fas fa-minus-circle"></i>
            </button>
            <span>{item.amount}</span>
            <button type="button" onClick={() => increment(item)}>
              <i className="fas fa-plus-circle"></i>
            </button>
          </div>

          <div>
            <span className="item__subtotal">{formatPrice(item.subtotal)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
