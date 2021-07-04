import './style.css'
import { useReducer, useEffect } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'minuteChange':
            return {hour: state.hour, minute: state.minute + 1, midday: state.midday }
        case 'hourChange':
            return {hour: state.hour + 1, minute: 0, midday: state.midday }
        case 'noon':
            return {hour: state.hour + 1, minute: 0, midday: "pm" }
        case 'one':
            return {hour: 1, minute: 0, midday: state.midday }
        default:;
    }
}


function Clock(){

    const [state, dispatch] = useReducer(reducer, {
        hour: 8, minute: 0, midday: "am"
    })

    const {hour, minute, midday} = state;

    useEffect(() => {
        const interval = setInterval(()=>{
            if (minute<5){
                dispatch({type: 'minuteChange'})
            }else if (minute === 5 && hour === 11){
                dispatch ({type: 'noon'})
            }else if (minute === 5 && hour === 12){
                dispatch ({type: 'one'})
            }else{
                dispatch ({type: 'hourChange'})
            }
        }, 5000)
        

        return () => {
            clearInterval(interval)
        }
    }, [minute])



    return <div id='clock'> {hour}:{minute}0 {midday} | Day 1 </div>
}

export default Clock;