import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseStat, increaseStat } from '../game/gameSlice'
import { setMessage, setGameOver } from '../message/messageSlice';

import StatBar from "../statbar/StatBar";
import Clock from "../clock/Clock";

import './style.css';

function HUD() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused)

    const food = useSelector(state => state.rootReducer.game.stats.foodStat)
    const walk = useSelector(state => state.rootReducer.game.stats.walkStat)
    const play = useSelector(state => state.rootReducer.game.stats.playStat)

    useEffect(() => {
        let foodInt;

        if(paused){
            clearInterval(foodInt)
        }else if(food === 50){
            dispatch(setMessage(`Luna is hungry!`))
            dispatch(decreaseStat('foodStat'))
        }else if(food === 20){
            dispatch(setMessage(`Luna is *really* hungry! Quick: Get to her bowl!`))
            dispatch(decreaseStat('foodStat'))
        }else if(food === 0){
            dispatch(setGameOver())
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



    return (
        <div id='HUDDiv'>
            <Clock />
            <div id='statsContainer'>
                <StatBar stat={food} statName={"food"} />
                <StatBar stat={walk} statName={"walk"} />
                <StatBar stat={play} statName={"play"} />
            </div>
        </div>
    )
}

export default HUD;