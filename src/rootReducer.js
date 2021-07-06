import { combineReducers } from "redux";

import messageSlice from "./components/message/messageSlice";
import gameSlice from "./components/game/gameSlice";

const rootReducer = combineReducers({
    messages: messageSlice,
    game: gameSlice
})

export default rootReducer;

