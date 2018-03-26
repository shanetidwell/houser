const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    image_url:"",
    monthly_mortgage: "",
    desired_rent: ""    
}
export default function(state = initialState, action){
    switch(action.type){
        case 'UPDATE_NAME':
            console.log("reducer update name", action)
            return {...state, name: action.payload}
        // case "UPDATE_DESCRIPTION":
        // console.log("reducer update description", action)
        //     return {...state, description: action.payload}
        case "UPDATE_ADDRESS":
            console.log("reducer update address", action)
            return {...state, address: action.payload}
        case "UPDATE_CITY":
            console.log("reducer update city", action)
            return {...state, city: action.payload}
        case "UPDATE_STATE":
            console.log("reducer update state", action)
            return {...state, state: action.payload}
        case "UPDATE_ZIP":
            console.log("reducer update zip", action)
            return {...state, zip: action.payload}
        case "UPDATE_IMAGE_URL":
            console.log("reducer update image url", action)
            return {...state, image_url: action.payload}
        // case "UPDATE_LOAN_AMOUNT":
        //     console.log("reducer update Loan Amount", action)
        //     return {...state, loan_amount: action.payload}
        case "UPDATE_MONTHLY_MORTGAGE":
            console.log("reducer update mortgage", action)
            return {...state, monthly_mortgage: action.payload}
        case "UPDATE_DESIRED_RENT":
            console.log("reducer update desired rent", action)
            return {...state, desired_rent: action.payload}

        case "CANCEL":
            console.log("cancel", action)
            return {...state, 
                name: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                image_url:"",
                monthly_mortgage: "",
                desired_rent: "" 
            }
        
        default: 
            return state;
    }
}