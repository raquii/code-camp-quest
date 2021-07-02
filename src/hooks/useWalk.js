import { useReducer } from "react";
import { PLAYER_FRAMES } from "../config/constants";
import getNextTile from "../utilities/get-next-tile";

const reducer = (state, action) => {
    switch (action.type) {
        case 'down':
            return {
                direction: 0,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: { ...state.position, y: state.position.y + 2 }
            }
        case 'left':
            return {
                direction: 1,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: { ...state.position, x: state.position.x - 2 }
            }
        case 'right':
            return {
                direction: 2,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: { ...state.position, x: state.position.x + 2 }
            }
        case 'up':
            return {
                direction: 3,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: { ...state.position, y: state.position.y - 2 }
            }
        default: ;
    }
}

function useWalk() {
    const [state, dispatch] = useReducer(reducer, {
        direction: 0, //direction values match sprite sheet y-index values
        animationFrame: 0, //animationFrame values match sprite sheet x-index values
        position: { x: 0, y: 192 }, //sets starting coordinates next to bed
    })

    const { direction, animationFrame, position } = state;

    function walk(arrowKey) {
        //checks if next tile allows for walking before dispatching to reducer
        if (getNextTile(arrowKey, state.position)) {
            dispatch({ type: arrowKey })
        }

    }

    return {
        direction, animationFrame, position, walk
    }
}

export default useWalk;