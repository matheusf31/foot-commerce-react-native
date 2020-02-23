import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSucess, updateAmount } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSucess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/**
 * call -> chamar métodos assíncronos que retornam promessas
 * put -> dispara actions
 * select -> buscar informações dentro do estado
 * all -> cadastrar varios listeners (ouve quando uma action é disparada)
 * takeLatest -> listener que ouve quando uma action é disparada (quando várias chamadas são feitas a última é capturada)
 */
