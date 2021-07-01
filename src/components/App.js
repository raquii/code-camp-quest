import Player from "./player/Player";
import Map from "./map/Map";
import HUD from "./hud/HUD";
import Viewport from "./viewport/Viewport";
import './style.css';

function App() {

  return (
    <div className="App">
      <Viewport>
        <Player />
        <Map />
      </Viewport>
      <HUD />
    </div>
  );
}

export default App;
