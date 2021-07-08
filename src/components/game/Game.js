import { useSelector, useDispatch } from 'react-redux';
import Console from '../console/Console';
import HUD from "../hud/HUD"
import Viewport from "../viewport/Viewport";
import Button from '../button/Button';

import { togglePaused } from "./gameSlice"

import './style.css';

function Game() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused);
    const message = useSelector(state => state.rootReducer.game.message);

    function onPauseClick() {
        dispatch(togglePaused())
    }

    return (
        <>
            <Viewport />
            <Console message={message} />
            <Button 
                label={paused ? '▶' : '❚❚'} 
                hoverLabel={paused? 'RESUME' : 'PAUSE'}
                handleClick={onPauseClick}
                className="pause-btn"
            />            
            <HUD />
        </>
    )
}

export default Game;