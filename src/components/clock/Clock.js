import './style.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minuteChange, hourChange, middayToggle, afterNoon, resetClock } from './clockSlice'
import { endGame, newDay } from '../game/gameSlice';

function Clock() {
    const dispatch = useDispatch();

    const day = useSelector(state => state.rootReducer.game.day)
    const tasks = useSelector(state => state.rootReducer.game.totalTasks)
    const paused = useSelector(state => state.rootReducer.game.paused)
    const hour = useSelector(state => state.rootReducer.clock.hour)
    const minute = useSelector(state => state.rootReducer.clock.minute)
    const midday = useSelector(state => state.rootReducer.clock.midday)
  

    useEffect(() => {
        let clockInterval;

        if(paused){
            clearInterval(clockInterval)
        }else if(hour===12 && !midday){
            if(tasks.length > 0){
                dispatch(endGame(`I didn't finish my homework!`))
            }else{
                dispatch(newDay())
                dispatch(resetClock())
            }
        }else{
            clockInterval = setInterval(() => {
                if (minute < 5) {
                    dispatch(minuteChange())
                } else if (minute === 5 && hour === 11) {
                    dispatch(middayToggle())
                } else if (minute === 5 && hour === 12) {
                    dispatch(afterNoon())
                } else {
                    dispatch(hourChange())
                }
            }, 500)
        }

        return () => {
            clearInterval(clockInterval)
        }

    }, [dispatch, hour, minute, midday, tasks, paused])

    return <div id='clock'> {hour}:{minute}0 {midday ? 'pm' : 'am'} | Day {day} </div>
}

export default Clock;