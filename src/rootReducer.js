import { combineReducers } from "redux";

import messageSlice from "./components/message/messageSlice";
import gameSlice from "./components/game/gameSlice";
import clockSlice from "./components/clock/clockSlice";

const rootReducer = combineReducers({
    message: messageSlice,
    game: gameSlice,
    clock: clockSlice,
})

export default rootReducer;

