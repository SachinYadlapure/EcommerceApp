import { createReducer } from "@reduxjs/toolkit";

export const productsReducer = createReducer(
  { products: [] },
  {
    allProductRequest: (state) => {
      state.loading = true;
      state.products = [];
    },
    allProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload.products;
      state.productsCount = action.payload.productsCount;
      state.resultPerPage = action.payload.resultPerPage;
      state.filteredProductsCount = action.payload.filteredProductsCount;
    },
    allProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    adminProductRequest: (state, action) => {
      state.loading = true;
      state.products = [];
    },
    adminProductSuccess: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    adminProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const productDetailsReducer = createReducer(
  { product: {} },
  {
    productDetailsRequest: (state) => {
      state.loading = true;
      state.product = {};
    },
    productDetailsSuccess: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    productDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const newReviewReducer = createReducer(
  {},
  {
    newReviewRequest: (state) => {
      state.loading = true;
    },
    newReviewSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },
    newReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    newReviewReset: (state, action) => {
      state.loading = false;
      state.success = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const newProductReducer = createReducer(
  { product: {} },
  {
    newProductRequest: (state) => {
      state.loading = true;
      state.product = {};
    },
    newProductSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload.success;
      state.product = action.payload.product;
    },
    newProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    newProductReset: (state) => {
      state.loading = false;
      state.success = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const productReducer = createReducer(
  {},
  {
    deleteProductRequest: (state) => {
      state.loading = true;
    },
    deleteProductSuccess: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    deleteProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteProductReset: (state) => {
      state.loading = false;
      state.isDeleted = false;
    },
    updateProductRequest: (state) => {
      state.loading = true;
    },
    updateProductSuccess: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    updateProductFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateProductReset: (state) => {
      state.loading = false;
      state.isUpdated = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const productReviewsReducer = createReducer(
  { reviews: [] },
  {
    allReviewRequest: (state) => {
      state.loading = true;
      state.reviews = [];
    },
    allReviewSuccess: (state, action) => {
      state.loading = false;
      state.reviews = action.payload;
    },
    allReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const reviewReducer = createReducer(
  {},
  {
    deleteReviewRequest: (state) => {
      state.loading = true;
    },
    deleteReviewSuccess: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    deleteReviewFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteReviewReset: (state, action) => {
      state.loading = false;
      state.isDeleted = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
