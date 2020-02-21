import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { addToCartSucess } from './actions';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(addToCartSucess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);

/**
 * call -> chamar métodos assíncronos que retornam promessas
 * put -> dispara actions
 * all -> cadastrar varios listeners (ouve quando uma action é disparada)
 * takeLatest -> listener que ouve quando uma action é disparada (quando várias chamadas são feitas a última é capturada)
 */
