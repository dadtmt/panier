import { combineReducers } from "redux";

import panierReducer from "./panierReducer";
import catalogueReducer from "./catalogueReducer";

export default combineReducers({
  panier: panierReducer,
  catalogue: catalogueReducer
});
