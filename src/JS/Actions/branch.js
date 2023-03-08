import { FAIL_BRANCH, GET_BRANCH, GET_BRANCHES, LOAD_BRANCH } from "../ActionTypes/branch"
import axios from "../../Instance/axios"
import { toast } from "react-toastify"


export const getBranches = (id) => async (dispatch) => {
    dispatch({type : LOAD_BRANCH})
    try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.get(`/api/branch/allBranches/${id}` , config)
        dispatch({type : GET_BRANCHES , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_BRANCH , payload : error.response.data.msg})
    }
}  

export const addBranch = (newBranch , handleClose , branchBusiness) => async (dispatch) => {
    dispatch({type : LOAD_BRANCH})
    try {
        let resault = await axios.post("/api/branch/newBranch" , newBranch) 
        handleClose()
        await dispatch(getBranches(branchBusiness))
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_BRANCH , payload : error.response.data.msg})
    }
}

export const deleteBranch = (id , playerId , handleCloseD) => async (dispatch) => {
    dispatch({type : LOAD_BRANCH})
    try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.delete(`/api/branch/${id}` , config)
        handleCloseD()
        dispatch(getBranches(playerId))
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_BRANCH , payload : error.response.data.msg})
    }
}

export const editBranch = (id , newBranch) => async (dispatch) => {
    dispatch({type : LOAD_BRANCH})
    try {
     await axios.put(`/api/branch/${id}` , newBranch)
        dispatch(getBranches())
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_BRANCH , payload :error.response.data.errors.msg})
    }
}

export const getBranch = (id) => async (dispatch) => {
    dispatch({type : LOAD_BRANCH})
    try {
        let resault = await axios.get(`/api/branch/getOne/${id}`)
        dispatch({type : GET_BRANCH , payload : resault.data})
    } catch (error) {
        dispatch({type : FAIL_BRANCH , payload : error.response.data.msg})
    }
}  