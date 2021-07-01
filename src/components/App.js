import { Switch, Route } from "react-router";
import NavBar from "./navbar/NavBar";
import Game from "./game/Game";
import './style.css';

function App() {

  return (
    <div className="App">

      <NavBar />

      <div id="contentDiv">

        <Switch>

          <Route exact path="/">
            <Game />
          </Route>

          <Route path="/instructions">
            <h1>Instructions</h1>
          </Route>

          <Route path="/highscores">
            <h1>High Scores</h1>
          </Route>

          <Route path="*">
            <h1>404 Not Found</h1>
          </Route>

        </Switch>

      </div>
  
    </div>
  );
}

export default App;
