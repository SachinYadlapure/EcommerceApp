import { createReducer } from "@reduxjs/toolkit";

export const newOrderReducer = createReducer(
  {},
  {
    createOrderRequest: (state) => {
      state.loading = true;
    },
    createOrderSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    createOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const myOrdersReducer = createReducer(
  { orders: [] },
  {
    myOrdersRequest: (state) => {
      state.loading = true;
      state.orders = [];
    },
    myOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    myOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const orderdetailsReducer = createReducer(
  { order: {} },
  {
    orderDetailsRequest: (state) => {
      state.loading = true;
      state.order = {};
    },
    orderDetailsSuccess: (state, action) => {
      state.loading = false;
      state.order = action.payload;
    },
    orderDetailsFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const allOrdersReducer = createReducer(
  { orders: [] },
  {
    allOrdersRequest: (state) => {
      state.loading = true;
      state.orders = [];
    },
    allOrdersSuccess: (state, action) => {
      state.loading = false;
      state.orders = action.payload;
    },
    allOrdersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);

export const orderReducer = createReducer(
  {},
  {
    updateOrderRequest: (state) => {
      state.loading = true;
    },
    updateOrderSuccess: (state, action) => {
      state.loading = false;
      state.isUpdated = action.payload;
    },
    updateOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateOrderReset: (state, action) => {
      state.loading = false;
      state.isUpdated = false;
    },
    deleteOrderRequest: (state) => {
      state.loading = true;
    },
    deleteOrderSuccess: (state, action) => {
      state.loading = false;
      state.isDeleted = action.payload;
    },
    deleteOrderFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteOrderReset: (state, action) => {
      state.loading = false;
      state.isDeleted = false;
    },
    clearErrors: (state) => {
      state.error = null;
    },
  }
);
