import { FAIL, LOADING, SIGN_IN, SIGN_UP , CURRENT, LOGOUT, GET_TEAM} from "../ActionTypes/sign";
import axios from "axios";
import {toast} from "react-toastify"

export const signUp = (newUser , navigate ) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let resault = await axios.post("/api/user/register", newUser);
      dispatch({ type: SIGN_UP, payload: resault.data });
        navigate("/")
    } catch (error) {
      toast.error(error.response.data.msg)
      dispatch({ type: FAIL, payload: error.response.data.msg });
    }
  };


  export const signTeam = (newUser , handleClose  ) => async (dispatch) => {
    dispatch({ type: LOADING });
    try {
      let resault = await axios.post("/api/user/register", newUser);
      handleClose()
      dispatch({ type: SIGN_UP, payload: resault.data });
      dispatch(getTeam())
    } catch (error) {
      toast.error("Check Your Information")
      toast.error(error.response.data.msg)
      dispatch({ type: FAIL, payload: error.response.data.msg});

    }
  };



  export const logIn = (userInfo , navigate) => async (dispatch) => {
    dispatch({type : LOADING})
    try {
        let resault = await axios.post("/api/user/login" , userInfo)
        dispatch({type : SIGN_IN , payload : resault.data})
        navigate("/dash")
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({ type: FAIL, payload: error.response.data.msg });
    }
}



export const  currentUser = () => async (dispatch) => {
  dispatch({type : LOADING})
  try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
      let resault = await axios.get("/api/user/current-user" , config)
      dispatch({type : CURRENT , payload : resault.data})
  } catch (error) {
      dispatch({ type: FAIL, payload: error.response.data.msg });
  }
}


export const logOut = (navigate) => async (dispatch) => {
  dispatch({type : LOADING})
  try {
    await dispatch({type : LOGOUT })
    localStorage.clear()
    navigate("/")
  } catch (error) {
    console.log(error)
  }
}


export const getTeam = () => async (dispatch) => {
  dispatch({type : LOADING})
  try {
  const config = await {headers : {authorization : localStorage.getItem("token")}}
      let resault = await axios.get("/api/user/all-users" , config)
      dispatch({type : GET_TEAM , payload : resault.data})
  } catch (error) {
      dispatch({type : FAIL , payload : error.response.data.msg})
  }
}  


export const removeAlerts = () => async (dispatch) => {
  dispatch({type : LOADING})
  try {
  const config = await {headers : {authorization : localStorage.getItem("token")}}
      const resault = await axios.put("/api/user/removeAlerts" , config)
      toast.success("Done")
    dispatch({type : CURRENT})
  } catch (error) {
    toast.error(error.response.data.msg)
      dispatch({type : FAIL , payload : error.response.data.msg})
  }
}  
