import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseStat, increaseStat, toggleBowl, setMessage, endGame } from '../game/gameSlice'

import StatBar from "../statbar/StatBar";
import Clock from "../clock/Clock";

import './style.css';

function HUD() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused)
    const food = useSelector(state => state.rootReducer.game.stats.foodStat)
    const walk = useSelector(state => state.rootReducer.game.stats.walkStat)
    const tasks = useSelector(state => state.rootReducer.game.totalTasks)
    const currentTask = useSelector(state => state.rootReducer.game.stats.taskStat)
    const bowl = useSelector(state => state.rootReducer.game.bowl)
    const outside = useSelector(state => state.rootReducer.game.outside)
    const dog = useSelector(state => state.rootReducer.game.dog)

    //food stat effects
    useEffect(() => {
        let foodInt;
        //if the game is paused, stop the interval
        if (paused) {
            clearInterval(foodInt)
        //if bowl is full, increment the food stat until 100, then set bowl to false
        } else if (bowl) {
            clearInterval(foodInt)

            if (food < 100) {
                foodInt = setInterval(() => {
                    dispatch(increaseStat('foodStat'))
                }, 100)
            } else if (food === 100) {
                clearInterval(foodInt)
                dispatch(toggleBowl(``))
            }
        //dispatch warnings to use if stat is low
        } else if (food === 50) {
            dispatch(setMessage(`Oh, ${dog} looks kind of hungry.`))
            dispatch(decreaseStat('foodStat'))
        } else if (food === 20) {
            dispatch(setMessage(`${dog} is hungry. I should fill the bowl.`))
            dispatch(decreaseStat('foodStat'))
        } else if (food === 0) {
            clearInterval(foodInt)
            dispatch(endGame(`${dog} ate my computer cord.`))
        } else {
            foodInt = setInterval(() => {
                dispatch(decreaseStat('foodStat'))
            }, 1500)
        }

        return () => {
            clearInterval(foodInt)
        }
    }, [dispatch, paused, food, bowl, dog])

    //walk decrement effect
    useEffect(() => {
        let walkInt;
        //if the game is paused, stop the interval
        if (paused) {
            clearInterval(walkInt)
        //if you're outside, increment the walk stat until 100
        } else if (outside) {
            clearInterval(walkInt)

            if (walk < 100) {
                walkInt = setInterval(() => {
                    dispatch(increaseStat('walkStat'))
                }, 500)
            } else if (walk === 100) {
                clearInterval(walkInt)
            }
        //dispatch warnings to use if stat is low
        } else if (walk === 50) {
            dispatch(setMessage(`${dog} might need to go outside.`))
            dispatch(decreaseStat('walkStat'))
        } else if (walk === 20) {
            dispatch(setMessage(`I really need to take ${dog} for a walk.`))
            dispatch(decreaseStat('walkStat'))
        } else if (walk === 0) {
            clearInterval(walkInt)
            dispatch(endGame(`${dog} peed on my computer.`))
        } else {
            walkInt = setInterval(() => {
                dispatch(decreaseStat('walkStat'))
            }, 2300)
        }

        return () => {
            clearInterval(walkInt)
        }
    }, [dispatch, paused, walk, outside, dog])

    //generates task display string
    function addTasks(arr) {
        let string = '';
        for (let i = 0; i < arr.length; i++) {
            string += '???'
        }
        return string
    }

    //creates daily task taskbar
    const dailyTasks = () => {
        return(
            <div id="taskDiv">
                <p>tasks</p>
                <div id="taskBar" >
                    {addTasks(tasks)}
                </div>
            </div>
        )
    }

    return (
        <div id='HUDDiv'>
            <Clock />
            <div id='statsContainer'>
                <StatBar stat={food} statName={"food"} />
                <StatBar stat={walk} statName={"walk"} />
                {currentTask > 0 ? <StatBar stat={currentTask} statName={"hw"} /> : dailyTasks()}  
            </div>
        </div>
    )
}

export default HUD;