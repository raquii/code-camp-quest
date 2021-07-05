
import HUD from "../hud/HUD"
import Viewport from "../viewport/Viewport";
import Button from "../button/Button";
import { useState } from "react";
import { ShowMessage } from "../../utilities/show-message"

function Game() {
    const [isPaused, setIsPaused] = useState(false);

    function onPauseClick() {
        setIsPaused(!isPaused)
    }

    return (
        <>
            <ShowMessage>
                <Viewport />
            </ShowMessage>

            <Button label={isPaused ? '⏸️' : '▶'} handleClick={onPauseClick} />
            <HUD />
        </>
    )
}

export default Game;