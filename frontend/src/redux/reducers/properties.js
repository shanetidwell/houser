const initialState = {
    fetching: false,
    data: [],
    userInfo:{},
    error: "",
    createdProperty: false,
    fetchedUserInfo: false
}

export default function(state = initialState, action){
    switch(action.type){
        case 'LOGIN_USER_PENDING':
            console.log("Reducer Hit Login User Pending")
            return {...state, fetching: true}
        case "LOGIN_USER_FULFILLED":
            console.log("Login User Fulfilled", action.payload)
            // var newDataArray = state.data;
            // newDataArray.push(action.payload.data)
            return {...state, userInfo: action.payload.data, fetching: false, fetchedUserInfo: true}
        case "LOGIN_USER_REJECTED":
            return {...state, error: action.payload, fetching: false} 
        
        case 'GET_PROPERTIES_PENDING':
            return {...state, fetching: true}
        case "GET_PROPERTIES_FULFILLED":
            return {...state, data: action.payload.data, fetching: false}
        case "GET_PROPERTIES_REJECTED":
            return {...state, error: action.payload, fetching: false}  
        
        case 'DELETE_PROPERTIES_PENDING':
            return {...state, fetching: true}
        case "DELETE_PROPERTIES_FULFILLED":
            return {...state, data: action.payload.data, fetching: false}
        case "DELETE_PROPERTIES_REJECTED":
            return {...state, error: action.payload, fetching: false}     
        
        case 'REGISTER_USER_PENDING':
            return {...state, fetching: true}
        case "REGISTER_USER_FULFILLED":
            return {...state, data: action.payload.data, fetching: false}
        case "REGISTER_USER_REJECTED":
            return {...state, error: action.payload, fetching: false}  
        
        case 'ADD_PROPERTY_PENDING':
            console.log("adding property", action.payload)
            return {...state, fetching: true}
        case "ADD_PROPERTY_FULFILLED":
            //console.log("Add property fulfilled ", action.payload)
            console.log("state", state)
            return {...state, data: action.payload.data, fetching: false, createdProperty:true}
        case "ADD_PROPERTY_REJECTED":
            return {...state, error: action.payload, fetching: false} 
            
        case "SET_CREATE_PROPERTY_FALSE":
            return {...state, createdProperty: false}

        
        default:
            return state;   
    }
}
