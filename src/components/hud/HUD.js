import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { decreaseStat, increaseStat } from '../game/gameSlice'

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
        }else{
            foodInt =  setInterval(() => {
                dispatch(decreaseStat('foodStat'))
            }, 1000)
        }

        return () => {
            clearInterval(foodInt)
        }
    }, [dispatch, paused])

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