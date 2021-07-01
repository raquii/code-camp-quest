import { NavLink } from "react-router-dom";
import './style.css'

function NavBar(){
    return(
        <nav>
            <NavLink exact to = "/">Play</NavLink>
            <NavLink to ="/instructions">Instructions</NavLink>
            <NavLink to="/highscores">High Scores</NavLink>
        </nav>
    )
}

export default NavBar;