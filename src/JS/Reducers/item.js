import { FAIL_ITEM, GET_ITEM, GET_ITEMS, LOAD_ITEM } from "../ActionTypes/item";
import { LOGOUT } from "../ActionTypes/sign";




const InitialState = {
    itemList: [],
    selectedItem: {},
    fail: null,
    loading: false,
  };
  
   const itemReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
      case LOAD_ITEM:
        return { ...state, fail : null , loading: true };
      case GET_ITEMS:
        return { ...state, fail : null , loading: false, itemList : payload.allItems};
        case GET_ITEM : 
        return {...state , fail : null , loading : false , selectedItem : payload.item}
        case FAIL_ITEM : 
        return {...state , fail : {payload} ,loading : false}
        case LOGOUT : 
        return {...InitialState}
      default:
        return state;
    }
  };
  
  
  export default itemReducer;