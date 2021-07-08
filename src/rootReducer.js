import { combineReducers } from "redux";

import gameSlice from "./components/game/gameSlice";
import clockSlice from "./components/clock/clockSlice";

const rootReducer = combineReducers({
    game: gameSlice,
    clock: clockSlice,
})

export default rootReducer;

