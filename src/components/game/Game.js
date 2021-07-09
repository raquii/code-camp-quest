import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Console from '../console/Console';
import HUD from "../hud/HUD"
import Viewport from "../viewport/Viewport";
import Button from '../button/Button';

import { togglePaused, nameDog } from "./gameSlice"

import './style.css';

function Game() {
    const [text, setText] = useState('');

    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused);
    const message = useSelector(state => state.rootReducer.game.message);
    const dog = useSelector(state => state.rootReducer.game.dog);

    function onPauseClick() {
        dispatch(togglePaused())
    }

    function handleEnter(e) {
        e.preventDefault()
        const name = text.trim();
        console.log(name)
        if (name) {
            dispatch(nameDog(name));
            setText('');
        }
    }

    if (dog.length <= 0) {
        return (
            <div id='start-game'>
                <h1>Welcome to CodeCamp Quest!</h1>
                <div id='start-header'>
                    <p>Let me help you procrastinate that chore a little longer.</p>
                    <p>To get started, name your dog and hit 'enter'.</p>
                </div>

                <form onSubmit={handleEnter}>
                    <label>
                        Name Your Dog:&nbsp;
                    </label>
                    <input
                        type='text'
                        id='name'
                        value={text}
                        autoFocus={true}
                        onChange={e => setText(e.target.value)}
                    />
                </form>
            </div>
        )
    }

    return (
        <>
            <Viewport />
            <Console message={message} />
            <Button
                label={paused ? '▶' : '❚❚'}
                hoverLabel={paused ? 'RESUME' : 'PAUSE'}
                handleClick={onPauseClick}
                className="pause-btn"
            />
            <HUD />
        </>
    )
}

export default Game;