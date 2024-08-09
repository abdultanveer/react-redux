import { createStore } from "redux";
import cakeReducer from "./cakeReducer"; 
//importing a default export

const store = createStore(cakeReducer)
export default store