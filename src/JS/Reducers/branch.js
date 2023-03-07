import { FAIL_BRANCH, GET_BRANCH, GET_BRANCHES, LOAD_BRANCH } from "../ActionTypes/branch";
import { LOGOUT } from "../ActionTypes/sign";

const InitialState = {
    branchList: [],
    selectedBranch: {},
    fail: null,
    loading: false,
  };
  
   const branchReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
      case LOAD_BRANCH:
        return { ...state, fail : null , loading: true };
      case GET_BRANCHES:
        return { ...state, fail : null , loading: false, branchList : payload.allBranches};
        case GET_BRANCH : 
        return {...state , fail : null , loading : false , selectedBranch : payload.iBranch}
        case FAIL_BRANCH : 
        return {...state , fail : {payload} ,loading : false}
        case LOGOUT : 
        return {...InitialState}
      default:
        return state;
    }
  };
  
  
  export default branchReducer;