import rootReducer from "../Reducers/index";
import thunk from "redux-thunk"
import { applyMiddleware, compose, createStore } from "redux";
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
import signReducer from "../Reducers/sign";
const composeEnhancer =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = createStore (rootReducer , composeEnhancer(applyMiddleware(thunk)))
const persistor = persistStore(store)

export default store;
export {persistor}