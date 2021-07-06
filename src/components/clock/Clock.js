import './style.css'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { minuteChange, hourChange, middayToggle, afterNoon } from './clockSlice'


function Clock() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused)

    const hour = useSelector(state => state.rootReducer.clock.hour)
    const minute = useSelector(state => state.rootReducer.clock.minute)
    const midday = useSelector(state => state.rootReducer.clock.midday)

    useEffect(() => {
        let clockInterval;

        if(paused){
            clearInterval(clockInterval)
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
            }, 1000)
        }

        return () => {
            clearInterval(clockInterval)
        }

    }, [dispatch, hour, minute, paused])

    return <div id='clock'> {hour}:{minute}0 {midday ? 'pm' : 'am'} | Day 1 </div>
}

export default Clock;