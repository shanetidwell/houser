const updateName = (name) =>{
    return{
        type: "UPDATE_NAME",
        payload: name
    }
}

const updateDescription = (description) =>{
    return{
        type: "UPDATE_DESCRIPTION",
        payload: description
    }
}

const updateAddress = (address) =>{
    return{
        type: "UPDATE_ADDRESS",
        payload: address
    }
}
const updateCity = (city) =>{
    return{
        type: "UPDATE_CITY",
        payload: city
    }
}
const updateState = (state) =>{
    return{
        type: "UPDATE_STATE",
        payload: state
    }
}
const updateZip = (zip) =>{
    return{
        type: "UPDATE_ZIP",
        payload: zip
    }
}
const updateImageUrl = (imageUrl) =>{
    return{
        type: "UPDATE_IMAGE_URL",
        payload: imageUrl
    }
}
const updateLoanAmount = (loan_amount) =>{
    return{
        type: "UPDATE_LOAN_AMOUNT",
        payload: loan_amount
    }
}
const updateMonthlyMortgage = (monthlyMortgage) =>{
    return{
        type: "UPDATE_MONTHLY_MORTGAGE",
        payload: monthlyMortgage
    }
}
const updateDesiredRent= (desiredRent) =>{
    return{
        type: "UPDATE_DESIRED_RENT",
        payload: desiredRent
    }
}
const cancel = ()=> {
    return {
        type: "CANCEL",
        payload: ""
    }
}
export{cancel, updateName, updateDescription, updateAddress, updateCity, updateState, updateZip, updateImageUrl, updateLoanAmount, updateMonthlyMortgage, updateDesiredRent}