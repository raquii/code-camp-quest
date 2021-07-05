import { useState } from "react";
import { MAP_TABLE } from "../config/constants";

function useAction() {

    const [isAction, setIsAction] = useState(false)

    function actionAlert({ x, y }) {
        const currentXCord = ((x + 192) - (x % 32)) / 32
        const currentYCord = (y - (y % 32)) / 32
        const currentTile = MAP_TABLE[currentYCord][currentXCord]["action"] 
        // console.log(x + 192, y)
        // console.log(currentXCord, currentYCord)
        // console.log(MAP_TABLE[currentYCord][currentXCord])

        if (currentTile !== isAction) {
            console.log("changing isAction to", !isAction)
            setIsAction(isAction=> !isAction)
        }
    }

    function action(){
        console.log('this should call for the action to occur')
    }

    return {
        action, isAction, actionAlert
    }
}

export default useAction;