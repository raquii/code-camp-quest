// import { useReducer } from "react";
import { MAP_TABLE } from "../config/constants";

function useAction() {

    // const [state, dispatch] = useReducer(reducer, {

    // })

    // const { direction, animationFrame, position, tile } = state;

    function action({ x, y }) {
        const currentXCord = (x - (x % 32)) / 32
        const currentYCord = (y - (y % 32)) / 32
        console.log(x, y)
        console.log(currentXCord, currentYCord)
        console.log(MAP_TABLE[currentYCord][currentXCord])

        if (MAP_TABLE[currentYCord][currentXCord]["action"]) {
            console.log("action tile")
        } else {
            console.log("not an action tile")
        }

    }

    return {
        action
    }
}

export default useAction;