const initialState = [
    {
        id: 1,
        name: "Nirbhay Singh",
        email: "n@gmail.com",
        phone: 1234567890
    },{
        id: 2,
        name: "Ricky Ponting",
        email: "n2@gmail.com",
        phone: 8765433321
    }
]

export const contactReducer = ( state = initialState, action) =>{
    switch (action.type){
        case "ADD_CONTACT":
            return [...state, action.payload]
        default: return state
    }
}

