import { combineReducers } from "redux";
import authReducer from './auth.reducers'
import userReducers from "./user.reducers";
import productsReducer from "./products.reducers";
import ordersReducer from "./orders.reducer";
import categoryReducer from "./category.reducer";
import pageReducer from "./page.reducers";

const rootReducer = combineReducers({
    auth:authReducer,
    user:userReducers,
    product:productsReducer,
    order:ordersReducer,
    category:categoryReducer,
    page:pageReducer
})

export default rootReducer