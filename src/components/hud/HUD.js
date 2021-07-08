import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseStat} from '../game/gameSlice'

import StatBar from "../statbar/StatBar";
import Clock from "../clock/Clock";

import './style.css';

function HUD() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused)
    const food = useSelector(state => state.rootReducer.game.stats.foodStat)
    const walk = useSelector(state => state.rootReducer.game.stats.walkStat)
    const tasks = useSelector(state => state.rootReducer.game.totalTasks)

    //food decrement effect
    useEffect(() => {
        let foodInt;

        if(paused){
            clearInterval(foodInt)
        }else if(food === 50){
            dispatch(decreaseStat('foodStat'))
        }else if(food === 20){
            dispatch(decreaseStat('foodStat'))
        }else if(food === 0){
            
            clearInterval(foodInt)
        }else{
            foodInt =  setInterval(() => {
                dispatch(decreaseStat('foodStat'))
            }, 2000)
        }

        return () => {
            clearInterval(foodInt)
        }
    }, [dispatch, paused, food])

    //walk decrement effect
    useEffect(() => {
        let walkInt;

        if(paused){
            clearInterval(walkInt)
        }else{
            walkInt =  setInterval(() => {
                dispatch(decreaseStat('walkStat'))
            }, 5000)
        }

        return () => {
            clearInterval(walkInt)
        }
    }, [dispatch, paused])

    //generates task display string
    function addTasks(arr){
        let string = '';
        for(let i = 0; i < arr.length; i++){
            string += ' ■'
        }
        return string
    }

    return (
        <div id='HUDDiv'>
            <Clock />
            <div id='statsContainer'>
                <StatBar stat={food} statName={"food"} />
                <StatBar stat={walk} statName={"walk"} />
                <div id="taskDiv">
                    <p>tasks</p>
                    <div id="taskBar" >
                        {addTasks(tasks)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HUD;