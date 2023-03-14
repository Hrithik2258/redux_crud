import { combineReducers } from "redux";
import usersReducers from "./reducers";


const rootReducers = combineReducers({
        data:usersReducers
});

export default rootReducers;