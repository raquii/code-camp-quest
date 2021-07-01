import { useReducer } from "react";
import { PLAYER_FRAMES } from "../config/constants";
import getNextTile from "../utilities/get-next-tile";

const reducer = (state, action) => {
    switch(action.type){
        case 'down': 
            return {
                direction: 0, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, y: state.position.y + 1}
            }
        case 'left': 
            return {
                direction: 1, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, x: state.position.x - 1}
            }
        case 'right': 
            return {
                direction: 2, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, x: state.position.x + 1}
            }
        case 'up': 
            return {
                direction: 3, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, y: state.position.y - 1}
            }
        default:;
    }
}

function useWalk(){
    const [state, dispatch] = useReducer(reducer, {
        direction: 0,
        animationFrame: 0,
        position: {x:256, y:192},
    })

    const { direction, animationFrame, position} = state;

    function walk(arrowKey){
        
        if(getNextTile(arrowKey, state.position)){
            dispatch({type: arrowKey})
        }

    }

    return {
        direction, animationFrame, position, walk
    }
}

export default useWalk;