import { takeEvery, put, call, all } from 'redux-saga/effects';
import axios from 'axios';

import * as actions from '../actions';

const {
  getProduct,
  getSimilarRecipes,
  addToWishlist,
  removeFromWishlist,
} = actions;

const fetchEntityById = (resource, id) => axios.get(`${resource}/${id}.json`);
const fetchEntityCollection = resource => axios.get(`${resource}.json`);

function* getProductSaga({ id }) {
  try {
    const response = yield call(fetchEntityById, 'products', id);

    yield put(getProduct.success(response.data));
  } catch (error) {
    yield put(getProduct.failure(error));
  }
}

function* watchGetProductSaga() {
  yield takeEvery(actions.GET_PRODUCT.REQUEST, getProductSaga);
}

function* getSimilarRecipesSaga({ id }) {
  try {
    const response = yield call(fetchEntityCollection, 'products');

    const recipes = Object.keys(response.data).reduce((acc, recipeId) => {
      if (recipeId !== id) {
        return acc.concat([response.data[recipeId]]);
      }
      return acc;
    }, []);

    yield put(getSimilarRecipes.success(recipes));
  } catch (error) {
    yield put(getSimilarRecipes.failure(error));
  }
}

function* watchGetSimilarRecipesSaga() {
  yield takeEvery(actions.GET_SIMILAR_RECIPES.REQUEST, getSimilarRecipesSaga);
}

function* addToWishListSaga({ userId, productId }) {
  try {
    const response = yield call(fetchEntityById, 'customers', userId);

    const updatedWishlist = response.data.wishlist.concat(productId);
    yield put(addToWishlist.success(updatedWishlist));
  } catch (error) {
    yield put(addToWishlist.failure(error));
  }
}

function* watchAddToWishListSaga() {
  yield takeEvery(actions.ADD_TO_WISHLIST.REQUEST, addToWishListSaga);
}

function* removeFromWishListSaga({ userId, productId }) {
  try {
    const response = yield call(fetchEntityById, 'customers', userId);

    const updatedWishlist = response.data.wishlist.filter(
      id => id !== productId
    );
    yield put(removeFromWishlist.success(updatedWishlist));
  } catch (error) {
    yield put(removeFromWishlist.failure(error));
  }
}

function* watchRemoveFromWishListSaga() {
  yield takeEvery(actions.REMOVE_FROM_WISHLIST.REQUEST, removeFromWishListSaga);
}

export default function* rootSaga() {
  yield all([
    watchGetProductSaga(),
    watchGetSimilarRecipesSaga(),
    watchAddToWishListSaga(),
    watchRemoveFromWishListSaga(),
  ]);
}
