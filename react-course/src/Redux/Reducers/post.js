const initialState = []

export default (state = initialState, action) => {

    console.log(`##########`,action.payload)
    switch (action.type){
        case "FETCH_ALL": return action.payload
        case "CREATE": return state;
        default: return state
    }
}