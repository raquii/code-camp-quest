import { useReducer } from "react";
import { PLAYER_FRAMES, DOG_FRAMES, STEPS } from "../config/constants";
import getNextTile from "../utilities/get-next-tile";

const reducer = (state, action) => {

    switch (action.type) {
        case 'down':
            return {
                direction: 0,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                dogAnimationFrame: state.dogAnimationFrame < DOG_FRAMES - 1 ? state.dogAnimationFrame + 1 : 0,
                position: { ...state.position, top: state.position.top + STEPS },
                dogPosition: {...state.dogPosition, top: state.dogPosition.top + STEPS } 
            }
        case 'left':
            return {
                direction: 1,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                dogAnimationFrame: state.dogAnimationFrame < DOG_FRAMES - 1 ? state.dogAnimationFrame + 1 : 0,
                position: { ...state.position, left: state.position.left - STEPS },
                dogPosition: state.dogPosition.left> 160 ? { ...state.dogPosition, left: state.dogPosition.left - (STEPS * 2) } : {...state.dogPosition}
            }
        case 'right':
            return {
                direction: 2,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                dogAnimationFrame: state.dogAnimationFrame < DOG_FRAMES - 1 ? state.dogAnimationFrame + 1 : 0,
                position: { ...state.position, left: state.position.left + STEPS },
                dogPosition: state.dogPosition.left < 224 ? { ...state.dogPosition, left: state.dogPosition.left + (STEPS * 2) } : {...state.dogPosition}
            }
        case 'up':

            return {
                direction: 3,
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                dogAnimationFrame: state.dogAnimationFrame < DOG_FRAMES - 1 ? state.dogAnimationFrame + 1 : 0,
                position: { ...state.position, top: state.position.top - STEPS },
                dogPosition: {...state.dogPosition, top: state.dogPosition.top - STEPS }
            }
        default: ;
    }
}

function useWalk() {
    const [state, dispatch] = useReducer(reducer, {
        direction: 0, //direction values match sprite sheet y-index values
        animationFrame: 0, //animationFrame values match sprite sheet x-index values
        dogAnimationFrame: 0,
        position: { left: 0, top: 192 }, //sets starting coordinates next to bed
        dogPosition: {left: 160, top: 202}
    })

    const { direction, animationFrame, dogAnimationFrame, position, dogPosition } = state;

    function walk(arrowKey) {
        //checks if next tile allows for walking before dispatching to reducer
        if (getNextTile(arrowKey, state.position, "walk")) {
            dispatch({ type: arrowKey })
        }

    }

    return {
        direction, animationFrame, dogAnimationFrame, position, dogPosition, walk
    }
}

export default useWalk;