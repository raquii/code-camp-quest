import Player from "./components/player/Player";
import Map from "./components/map/Map";
import HUD from "./components/hud/HUD";

function App() {

  return (
    <div className="App">
      <Player />
      <Map />
      <HUD />
    </div>
  );
}

export default App;
