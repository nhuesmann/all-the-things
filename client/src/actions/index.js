const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const GET_USER = createRequestTypes('GET_USER');
export const GET_PRODUCT = createRequestTypes('GET_PRODUCT');
export const GET_SIMILAR_RECIPES = createRequestTypes('GET_SIMILAR_RECIPES');
export const ADD_TO_WISHLIST = createRequestTypes('ADD_TO_WISHLIST');
export const REMOVE_FROM_WISHLIST = createRequestTypes('REMOVE_FROM_WISHLIST');

export const THUMBNAIL_CLICKED = 'THUMBNAIL_CLICKED';
export const TOGGLE_CART = 'TOGGLE_CART';
export const ADD_TO_CART = 'ADD_TO_CART';
export const INCREMENT_SLIDER = 'INCREMENT_SLIDER';
export const DECREMENT_SLIDER = 'DECREMENT_SLIDER';

function action(type, payload = {}) {
  return { type, ...payload };
}

export const getUser = {
  request: id => action(GET_USER[REQUEST], { id }),
  success: user => action(GET_USER[SUCCESS], { user }),
  failure: error => action(GET_USER[FAILURE], { error }),
};

export const getProduct = {
  request: id => action(GET_PRODUCT[REQUEST], { id }),
  success: product => action(GET_PRODUCT[SUCCESS], { product }),
  failure: error => action(GET_PRODUCT[FAILURE], { error }),
};

export const getSimilarRecipes = {
  request: id => action(GET_SIMILAR_RECIPES[REQUEST], { id }),
  success: recipes => action(GET_SIMILAR_RECIPES[SUCCESS], { recipes }),
  failure: error => action(GET_SIMILAR_RECIPES[FAILURE], { error }),
};

export const addToWishlist = {
  request: (userId, productId) =>
    action(ADD_TO_WISHLIST[REQUEST], { userId, productId }),
  success: wishlist => action(ADD_TO_WISHLIST[SUCCESS], { wishlist }),
  failure: error => action(ADD_TO_WISHLIST[FAILURE], { error }),
};

export const removeFromWishlist = {
  request: (userId, productId) =>
    action(REMOVE_FROM_WISHLIST[REQUEST], { userId, productId }),
  success: wishlist => action(REMOVE_FROM_WISHLIST[SUCCESS], { wishlist }),
  failure: error => action(REMOVE_FROM_WISHLIST[FAILURE], { error }),
};

export const thumbnailClicked = index => action(THUMBNAIL_CLICKED, { index });
export const toggleCart = () => action(TOGGLE_CART);
export const addToCart = product => action(ADD_TO_CART, { product });
export const incrementSlider = () => action(INCREMENT_SLIDER);
export const decrementSlider = () => action(DECREMENT_SLIDER);

// export const USER_LOGGED_IN = 'USER_LOGGED_IN';
// export const USER_LOGGED_OUT = 'USER_LOGGED_OUT';
// export const ADD_TO_CART = 'ADD_TO_CART';
// export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
