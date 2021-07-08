import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseStat, increaseStat, toggleBowl, setMessage } from '../game/gameSlice'

import StatBar from "../statbar/StatBar";
import Clock from "../clock/Clock";

import './style.css';

function HUD() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused)
    const food = useSelector(state => state.rootReducer.game.stats.foodStat)
    const walk = useSelector(state => state.rootReducer.game.stats.walkStat)
    const tasks = useSelector(state => state.rootReducer.game.totalTasks)
    const bowl = useSelector(state => state.rootReducer.game.bowl)
    const outside = useSelector(state => state.rootReducer.game.outside)
    const dog = useSelector(state => state.rootReducer.game.dog)

    //food stat effects
    useEffect(() => {
        let foodInt;

        if (paused) {
            clearInterval(foodInt)
        } else if (bowl) {
            clearInterval(foodInt)

            if (food < 100) {
                foodInt = setInterval(() => {
                    dispatch(increaseStat('foodStat'))
                }, 100)
            } else if (food === 100) {
                clearInterval(foodInt)
                dispatch(toggleBowl(`Maybe we should go for a walk soon.`))
            }

        } else if (food === 50) {
            dispatch(setMessage(`Oh, ${dog} looks kind of hungry`))
            dispatch(decreaseStat('foodStat'))
        } else if (food === 20) {
            dispatch(setMessage(`${dog} is REALLY hungry. I should fill the bowl.`))
            dispatch(decreaseStat('foodStat'))
        } else if (food === 0) {
            //need to add game end dispatch
            clearInterval(foodInt)
        } else {
            foodInt = setInterval(() => {
                dispatch(decreaseStat('foodStat'))
            }, 2000)
        }

        return () => {
            clearInterval(foodInt)
        }
    }, [dispatch, paused, food, bowl])

    //walk decrement effect
    useEffect(() => {
        let walkInt;

        if (paused) {
            clearInterval(walkInt)

        } else if (outside) {
            clearInterval(walkInt)

            if (walk < 100) {
                walkInt = setInterval(() => {
                    dispatch(increaseStat('walkStat'))
                }, 2000)
            } else if (walk === 100) {
                clearInterval(walkInt)
            }

        } else if (walk === 50) {
            dispatch(setMessage(`${dog} might need to go outside.`))
            dispatch(decreaseStat('walkStat'))
        } else if (walk === 20) {
            dispatch(setMessage(`I really need to take ${dog} for a walk.`))
            dispatch(decreaseStat('walkStat'))
        } else if (walk === 0) {
            //need to add game over dispatch
            clearInterval(walkInt)
        } else {
            walkInt = setInterval(() => {
                dispatch(decreaseStat('walkStat'))
            }, 5000)
        }

        return () => {
            clearInterval(walkInt)
        }
    }, [dispatch, paused, walk, outside])

    //generates task display string
    function addTasks(arr) {
        let string = '';
        for (let i = 0; i < arr.length; i++) {
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