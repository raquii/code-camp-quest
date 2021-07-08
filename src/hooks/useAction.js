import { useState } from "react";
import { MAP_TABLE, ACTIONS } from "../config/constants";

function useAction() {
    const [isAction, setIsAction] = useState(false);

    function actionAlert({ left, top }) {
        const currentXCord = ((left + 192) - (left % 32)) / 32;
        const currentYCord = (top - (top % 32)) / 32;
        const currentTile = MAP_TABLE[currentYCord][currentXCord]["action"];
        
        if (currentTile !== isAction) {
            setIsAction(isAction=> !isAction);
        }
    }

    function action({left,top}){
        const currentXCord = ((left + 192) - (left % 32)) / 32;
        const currentYCord = (top - (top % 32)) / 32;

        if(isAction){
            console.log(ACTIONS[`${currentYCord}${currentXCord}`])
        } 
    }

    return {
        action, isAction, actionAlert
    };
}

export default useAction;