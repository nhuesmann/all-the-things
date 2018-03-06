import * as ActionTypes from '../actions';

function getUserSuccess(state, action) {
  return {
    ...state,
    user: action.user,
    cart: {
      ...action.user.cart,
      lineItems: {
        ...action.user.cart.lineItems,
      },
    },
  };
}

function getProductSuccess(state, action) {
  const { product } = action;
  const images = product.images.map((src, i) => ({
    src,
    alt: `${product.title} thumnbail ${i + 1}`,
    isActive: i === 0,
  }));
  const wishlisted = state.user.wishlist.includes(product.id);

  return {
    ...state,
    productDetail: {
      ...state.productDetail,
      loading: false,
      product,
      images,
      wishlisted,
    },
  };
}

function getProductFailure(state) {
  return {
    ...state,
    productDetail: { ...state.productDetail, loading: false },
  };
}

function getSimilarRecipesSuccess(state, action) {
  return {
    ...state,
    productDetail: {
      ...state.productDetail,
      similarRecipes: action.recipes,
    },
  };
}

function getSimilarRecipesFailure(state) {
  return {
    ...state,
    productDetail: { ...state.productDetail, loading: false },
  };
}

function thumbnailClicked(state, action) {
  const updatedImages = state.productDetail.images.map((image, index) => ({
    ...image,
    isActive: index === action.index,
  }));

  return {
    ...state,
    productDetail: { ...state.productDetail, images: updatedImages },
  };
}

function incrementSlider(state) {
  return {
    ...state,
    productDetail: {
      ...state.productDetail,
      similarRecipesSlice: state.productDetail.similarRecipesSlice + 1,
    },
  };
}

function decrementSlider(state) {
  return {
    ...state,
    productDetail: {
      ...state.productDetail,
      similarRecipesSlice: state.productDetail.similarRecipesSlice - 1,
    },
  };
}

function addToWishlistSuccess(state, action) {
  return {
    ...state,
    user: { ...state.user, wishlist: action.wishlist },
    productDetail: { ...state.productDetail, wishlisted: true },
  };
}

function removeFromWishlistSuccess(state, action) {
  return {
    ...state,
    user: { ...state.user, wishlist: action.wishlist },
    productDetail: { ...state.productDetail, wishlisted: false },
  };
}

function toggleCart(state) {
  return {
    ...state,
    displayCart: !state.displayCart,
  };
}

// For later: Do we want to store shippingCost and freeShippingThreshold outside of the cart Object?
function addToCart(state, action) {
  const newSubtotalCost =
    state.cart.subtotalCost + +action.product.variants[0].retail_price;
  const newShippingCost =
    newSubtotalCost > state.cart.freeShippingThreshold ? 0 : 10;
  const newTotalCost = newSubtotalCost + newShippingCost;

  return {
    ...state,
    displayCart: true,
    cart: {
      ...state.cart,
      shippingCost: newShippingCost,
      subtotalCost: newSubtotalCost,
      totalCost: newTotalCost,
      lineItems: [
        ...state.cart.lineItems,
        { ...action.product, selectedVariant: 0 },
      ],
    },
  };
}

const reducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.GET_USER.SUCCESS:
      return getUserSuccess(state, action);

    case ActionTypes.GET_PRODUCT.SUCCESS:
      return getProductSuccess(state, action);

    case ActionTypes.GET_PRODUCT.FAILURE:
      return getProductFailure(state);

    case ActionTypes.GET_SIMILAR_RECIPES.SUCCESS:
      return getSimilarRecipesSuccess(state, action);

    case ActionTypes.GET_SIMILAR_RECIPES.FAILURE:
      return getSimilarRecipesFailure(state);

    case ActionTypes.THUMBNAIL_CLICKED:
      return thumbnailClicked(state, action);

    case ActionTypes.INCREMENT_SLIDER:
      return incrementSlider(state);

    case ActionTypes.DECREMENT_SLIDER:
      return decrementSlider(state);

    case ActionTypes.TOGGLE_CART:
      return toggleCart(state);

    case ActionTypes.ADD_TO_CART:
      return addToCart(state, action);

    case ActionTypes.ADD_TO_WISHLIST.SUCCESS:
      return addToWishlistSuccess(state, action);

    case ActionTypes.REMOVE_FROM_WISHLIST.SUCCESS:
      return removeFromWishlistSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
