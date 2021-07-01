import { useReducer } from "react";
import { MAP_TABLE, PLAYER_FRAMES, DIRECTION_AXIS, PLAYER_SIZE } from "../config/constants";

const reducer = (state, action) => {
    switch(action.type){
        case 'down': 
            return {
                direction: 0, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, y: state.position.y + 1},
                tile: {...state.tile, y: state.position.y % 32 === 0 ? state.tile.y + 1 : state.tile.y}
            }
        case 'left': 
            return {
                direction: 1, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, x: state.position.x - 1},
                tile: {...state.tile, x: state.position.x % 32 === 0 ? state.tile.x - 1 : state.tile.x}
            }
        case 'right': 
            return {
                direction: 2, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, x: state.position.x + 1},
                tile: {...state.tile, x: state.position.x % 32 === 0 ? state.tile.x + 1 : state.tile.x}
            }
        case 'up': 
            return {
                direction: 3, 
                animationFrame: state.animationFrame < PLAYER_FRAMES - 1 ? state.animationFrame + 1 : 0,
                position: {...state.position, y: state.position.y - 1},
                tile: {...state.tile, y: state.position.y % 32 === 0 ? state.tile.y - 1 : state.tile.y}
            }
        case 'bounce':
            return{
                ...state,
                position: {...state.position, x: state.position.x + 1},
            }
    }
}

function useWalk(){
    const [state, dispatch] = useReducer(reducer, {
        direction: 0,
        animationFrame: 0,
        position: {x:256, y:192},
        tile: {x:8, y:6}
    })

    const { direction, animationFrame, position, tile } = state;

    function walk(arrowKey){
        
        if(getNextTile(arrowKey)){
            dispatch({type: arrowKey})
        }

    }

    function getNextTile(direction){
        const currentXCord = (state.position.x - (state.position.x % 32)) / 32
        const currentYCord = (state.position.y - (state.position.y % 32)) / 32 

        switch(direction){
            case 'down': 
                return MAP_TABLE[currentYCord + 1][currentXCord]["walk"]
            case 'left': 
                return MAP_TABLE[currentYCord][currentXCord]["walk"]
            case 'right': 
                return MAP_TABLE[currentYCord][currentXCord + 1]["walk"]
            case 'up': 
                return MAP_TABLE[currentYCord][currentXCord]["walk"]
        }
    }

    return {
        direction, animationFrame, position, tile, walk
    }
}

export default useWalk;