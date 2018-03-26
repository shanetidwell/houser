import axios from 'axios';

const baseUrl = "http://localhost:3005/api";

const login = (user) =>{
    console.log(user)
    return{
        type: 'LOGIN_USER',
        payload: axios.post(`${baseUrl}/auth/login`,{data:user})
    }
}

const getProperties = () =>{
    console.log("getting properties")
    return {
        type: "GET_PROPERTIES",
        payload: axios.get(`${baseUrl}/properties`)
    }
}

const deleteProperty = (id) =>{
    return {
        type: "DELETE_PROPERTIES",
        payload: axios.delete(`${baseUrl}/properties/${id}`)
    }
}
const register = (user) =>{
    return {
        type: "REGISTER_USER",
        payload: axios.post(`${baseUrl}/auth/register`,user)
    }
}
const addProperty = (property) =>{
    return {
        type: "ADD_PROPERTY",
        payload: axios.post(`${baseUrl}/properties`, property)
    }
}
const setCreatedPropertyFalse = ()=>{
    return {
        type: "SET_CREATE_PROPERTY_FALSE",
        payload: ""
    }
}



export {setCreatedPropertyFalse, login, getProperties, deleteProperty, register, addProperty}
