import { combineReducers} from "redux";
import { contactReducer } from "./ContactReducer"
import posts from "./post"


export default combineReducers({
    contactReducer,
    posts
})