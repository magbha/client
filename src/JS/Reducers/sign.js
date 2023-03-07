import { currentUser } from "../Actions/sign";
import { CURRENT, FAIL, GET_TEAM, LOADING, LOGOUT, SET, SIGN_IN, SIGN_UP } from "../ActionTypes/sign";
import { persistor } from "../Store/store";



const InitialState = {
    user : {},
    currentUser: {},
    loading: false,
    fail: null,
    isAuth : false,
    teamList : [],
    isAdmin : false
  };
  
  const signReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
      case LOADING:
        return { ...state, loading: true, fail: null };
      case SIGN_UP:
        localStorage.setItem("token", payload.token)
        return { ...state, loading: false, fail: null , user : payload , isAuth : true , isAdmin : payload.isAdmin} ;
      case SIGN_IN:
        localStorage.setItem("token" , payload.token)
        return { ...state, loading: false, fail: null , user : {...payload.user , password : null } ,isAuth : true , isAdmin : payload?.isAdmin };
      case CURRENT:
        return {...state, loading: false, fail: null, isAuth : true, currentUser : {...payload.currentUser, password : "none" } };
      case GET_TEAM :
        return  {...state , loading: false, fail: null, isAuth : true, teamList : payload.allUsers};
      case FAIL:
        return { ...state, loading: false, fail:  payload  };
        case LOGOUT:
          return {currentUser : null , isAuth : false , loading : false , fail : null , user : null};
      default:
        return state;
    }
  };
  
  export default signReducer;