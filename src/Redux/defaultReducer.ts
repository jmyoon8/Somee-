import { ActionType } from "./Types/types";
import {
   GET_CATEGORYS_FULFILLED,
   GET_CATEGORY_ITEMS_FULFILLED,
   GET_DETAIL_ITEM,
} from "./actionTypes";

const defaultState = {
   result: "",
};
const defaultReducer = (state = defaultState, action: ActionType) => {
   switch (action.type) {
      case GET_CATEGORY_ITEMS_FULFILLED:
         return { ...state, result: action.payLoad };
      case GET_CATEGORYS_FULFILLED:
         return { ...state, result: action.payLoad };
      case GET_DETAIL_ITEM:
         return { ...state, result: action.payLoad };
      default:
         return state;
   }
};
export default defaultReducer;
