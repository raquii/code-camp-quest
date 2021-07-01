import Player from "../player/Player";
import Map from "../map/Map";
import HUD from "../hud/HUD"
import Viewport from "../viewport/Viewport";

function Game() {
    return (
        <>
            <Viewport>
                <Player />
                <Map />
            </Viewport>
            <HUD />
        </>
    )
}

export default Game;