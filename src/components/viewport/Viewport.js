import './style.css'
import { VIEWPORT_SIZE } from '../../config/constants';
import { useSelector, useDispatch } from 'react-redux'
import { resetGame } from '../game/gameSlice';
import { resetClock } from '../clock/clockSlice';

import useWalk from '../../hooks/useWalk';
import useKeyboard from '../../hooks/useKeyboard';
import useAction from '../../hooks/useAction';

import Player from "../player/Player";
import Map from "../map/Map";


function Viewport() {
    const dispatch = useDispatch();

    const { direction, animationFrame, dogAnimationFrame, position, dogPosition, walk } = useWalk();
    const { action, isAction, actionAlert } = useAction();

    const paused = useSelector(state => state.rootReducer.game.paused)
    const gameover = useSelector(state => state.rootReducer.game.gameover)
    const score = useSelector(state => state.rootReducer.game.day)
    const name = useSelector(state => state.rootReducer.game.dog)

    //controls hook
    useKeyboard((e) => {
        if (!paused) {
            e.preventDefault()

            switch (e.keyCode) {
                case 40:
                case 83:
                    return walk('down') + actionAlert(position)
                case 37:
                case 65:
                    return walk('left') + actionAlert(position)
                case 39:
                case 68:
                    return walk('right') + actionAlert(position)
                case 38:
                case 87:
                    return walk('up') + actionAlert(position)
                case 13:
                case 32:
                    return action(position)
                default: ;
            }

        }

    })

    //submits users score to server
    function submitScore(){
        const scoreObj = {name: name, score: score}

        fetch('https://boiling-reaches-07903.herokuapp.com/highscores', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(scoreObj)
        })
        .then(r=>r.json())
        .then(data=>console.log(data))

        handleReset();
    }

    //resets the game state
    function handleReset(){
        dispatch(resetGame())
        dispatch(resetClock())
    }

    return (
        <div id="viewportContainer" style={{ width: VIEWPORT_SIZE, height: VIEWPORT_SIZE }}>

            {(paused && !gameover) &&
                <div className='paused' >
                    <span> PAUSED </span>
                </div>
            }
            {gameover  &&
                <div className='gameover' >
                    <span> GAME OVER </span>
                    <div>
                        <button className='gamebtn' onClick={submitScore}>Submit Score</button>
                        <button className='gamebtn' onClick={handleReset}>Restart</button>
                    </div>
                </div>
            }

            <Player
                frame={animationFrame}
                direction={direction}
                position={position}
                isAction={isAction}
                dogFrame={dogAnimationFrame}
                dogPosition={dogPosition}
            />

            <Map
                x={position.left}
            />

            <div
                id="viewportBG"
                style={{
                    width: VIEWPORT_SIZE,
                    height: VIEWPORT_SIZE,
                    zIndex: -1,
                    backgroundColor: "#1e1e2e"
                }}
            />
        </div>
    )
}

export default Viewport;