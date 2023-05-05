import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./Slices/userSlice";
import alertReducer from "./Slices/alertSlice";
import boardsReducer from "./Slices/boardsSlice";
import boardReducer from "./Slices/boardSlice";
import listReducer from "./Slices/listSlice";
import cardReducer from "./Slices/cardSlice";
import eventReducer from "./Slices/eventSlice";

const Store = configureStore({
    reducer : {
        user: userReducer,
        alert: alertReducer,
        boards: boardsReducer,
        board: boardReducer,
        list: listReducer,
        card: cardReducer,
        event: eventReducer,
    },
}) 
export default Store;