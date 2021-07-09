import { Switch, Route } from "react-router";
import NavBar from "./navbar/NavBar";
import Game from "./game/Game";
import Highscores from "./highscore/Highscores";
import Instruction from "./instruction/Instruction";
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
            <Instruction />
          </Route>

          <Route path="/highscores">
            <Highscores />
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
