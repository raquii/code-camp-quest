import { useState } from "react";
import { MAP_TABLE, ACTIONS } from "../config/constants";
import { useDispatch, useSelector } from 'react-redux';
import { setMessage, toggleOutside } from '../components/game/gameSlice';
import { toggleBowl } from '../components/game/gameSlice';


function useAction() {
    const [isAction, setIsAction] = useState(false);

    const dispatch = useDispatch();

    const hour = useSelector(state => state.rootReducer.clock.hour);
    const minute = useSelector(state => state.rootReducer.clock.minute);
    const midday = useSelector(state => state.rootReducer.clock.midday);
    const dog = useSelector(state => state.rootReducer.game.dog);

    //calculate an x and y index
    //pass those values to MAP_TABLE to check the boolean value of 'action' for that cord
    //toggles isAction
    //also dispatches to toggle outside when x-cord 940 is crossed
    function actionAlert({ left, top }) {
        const x = ((left + 192) - (left % 32)) / 32;
        const y = (top - (top % 32)) / 32;
        const currentTile = MAP_TABLE[y][x]["action"];
        
        if (currentTile !== isAction) {
            setIsAction(isAction=> !isAction);
        }else if(left === 940){
            dispatch(toggleOutside())
        }
    }

    //executed when user presses enter on an action tile
    //calculates an x and y cord that matches the values saved in the ACTIONS constant
    function action({left,top}){
        const x = ((left + 192) - (left % 32)) / 32;
        const y = (top - (top % 32)) / 32;
    
        if(isAction){
            switch(ACTIONS[`${y}${x}`]){
                //bedroom actions
                case 'dresser':
                    return dispatch(setMessage(`I look smart!`));
                case 'bed':
                    return dispatch(setMessage(`Time to sleep?`));
                case 'window':
                    return dispatch(setMessage(`What a pretty view.`));
                //office actions
                case 'clock':
                    if(midday){
                        return dispatch(setMessage(`Wow! It's already ${hour}:${minute}0 pm?`));
                    }else{
                        return dispatch(setMessage(`It's only ${hour}:${minute}0 am. The day is young.`));
                    }
                case 'plant':
                    return dispatch(setMessage(`I'm glad Mr. Plant doesn't have a stat bar.`));
                case 'computer':
                    return dispatch(setMessage(`Time to work!`));
                //kitchen actions
                case 'fridge':
                    return dispatch(setMessage(`It's full of expensive, canned dog food.`));
                case 'sink':
                    return dispatch(setMessage(`Ah. No dishes today!`));
                case 'coffee':
                    return dispatch(setMessage(`If I had a stat, it would be for coffee.`));
                case 'stove':
                    return dispatch(setMessage(`Maybe I'll bake some treats for ${dog}.`));
                case 'bowl':
                    return dispatch(toggleBowl(`Here you go, ${dog}.`));
                default:;
            }
        } 
    }

    return {
        action, isAction, actionAlert
    };
}

export default useAction;