const initialState = []

export default (state = initialState, action) => {
    switch (action.type){
        case "FETCH_ALL": return action.payload
        case "CREATE": return [...state, action.payload];
        default: return state
    }
}