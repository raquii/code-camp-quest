import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

import HUD from "../hud/HUD"
import Viewport from "../viewport/Viewport";
import Button from "../button/Button";
import { togglePaused } from "./gameSlice"

function Game() {
    const dispatch = useDispatch();

    const paused = useSelector(state => state.rootReducer.game.paused);

    function onPauseClick() {
        dispatch(togglePaused())
    }

    return (
        <>
            <Viewport />
            <Button label={paused ? '⏸️' : '▶'} handleClick={onPauseClick} />
            <HUD />
        </>
    )
}

export default Game;