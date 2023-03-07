import axios from "axios"
import { toast } from "react-toastify"
import { FAIL_ITEM, GET_ITEM, GET_ITEMS, LOAD_ITEM } from "../ActionTypes/item"






export const getItems = (id) => async (dispatch) => {
    dispatch({type : LOAD_ITEM})
    try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.get(`https://stroom-api.onrender.com/api/item/getItems/${id}` , config)
        dispatch({type : GET_ITEMS , payload : resault.data})
    } catch (error) {
        toast.error(error.response.data.msg , {toastId : "error1"})
        dispatch({type : FAIL_ITEM , payload : error.response.data.msg})
    }
}  

export const addItem = (newItem , handleClose , itemBranch) => async (dispatch) => {
    dispatch({type : LOAD_ITEM})
    try {
        const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.post("https://stroom-api.onrender.com/api/item/add-item" , newItem , config) 
        handleClose()
        await dispatch(getItems(itemBranch))
        toast.success("Item Created")
    } catch (error) {
        toast.error(error.response.data.msg)
        error?.response?.data?.msg?.map((err , index) => toast.error(err.msg , {toastId : index}))
        dispatch({type : FAIL_ITEM , payload : error.response.data.msg})
    }
}


export const deleteItem = (id , itemBranch , navigate) => async (dispatch) => {
    dispatch({type : LOAD_ITEM})
    try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.delete(`https://stroom-api.onrender.com/api/item/${id}` , config)
        dispatch(getItems(itemBranch))
        navigate("/products")
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_ITEM , payload : error.response.data.msg})
    }
}


export const editItem = (id , newItem , itemBranch , navigate) => async (dispatch) => {
    dispatch({type : LOAD_ITEM})
    try {
    const config = {headers : {authorization : localStorage.getItem("token")}}
    const resault = await axios.put(`https://stroom-api.onrender.com/api/item/${id}` , newItem , config)
        dispatch(getItems(itemBranch))
        navigate("/products")
        toast.success(resault.data.msg)
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_ITEM , payload : error.response.data.msg})
    }
}

export const getItem = (_id) => async (dispatch) => {
    dispatch({type : LOAD_ITEM})
    try {
        const config = {headers : {authorization : localStorage.getItem("token")}}
        let resault = await axios.get(`https://stroom-api.onrender.com/api/item/${_id}` , config)
        dispatch({type : GET_ITEM , payload : resault.data})
    } catch (error) {
        toast.error(error.response.data.msg)
        dispatch({type : FAIL_ITEM , payload : error.response.data.msg})
    }
}  