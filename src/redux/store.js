import { legacy_createStore as createStore } from 'redux';
import cakeReducer from "./cake/cakeReducer"; 
//importing a default export

const store = createStore(cakeReducer)
export default store