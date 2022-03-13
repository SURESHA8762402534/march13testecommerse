const addaction = (payload) => {
    return {
        type : 'ADD-TO-CART',
        payload
    }
}
const removeaction = (payload) => {
    return{
        type:'REMOVE-CART',
        payload
    }
}
const actionincrease = (payload)=>{
    return {
        tupe:'INCREASE',
        payload
    }
}

const actionclear = (payload)=>{
    return{
        type:'CLEAR-CART',
        payload
    }
}

export {addaction, removeaction, actionincrease,actionclear}