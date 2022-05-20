import { configureStore } from "@reduxjs/toolkit";
import testReducer from "./reducers/testReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import removingProductReducer from "./reducers/removingProductReducer";
import checkoutReducer from "./reducers/checkoutReducer";
export default configureStore({
  reducer: {
    test: testReducer,
    shoppingCart: shoppingCartReducer,
    removingProduct: removingProductReducer,
    checkout: checkoutReducer,
  },
});
