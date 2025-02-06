import { useEffect, useState } from "react";
import './style.css';

function Highscores() {
    const [scores, setScores] = useState([]);

    useEffect(() => {
      const scores = JSON.parse(localStorage.getItem("scores"));
      if (scores) {
        setScores(scores);
      }
    }, []);

    if (scores.length === 0) {
        return <h2>No scores to show!</h2>
    }

    function sortScores(){
        const sortedScores = scores.sort((a, b) => a.score < b.score ? 1 : -1)

        const highscores = sortedScores.map(score => {
            return (
                <tr key={score.id}>
                    <td>
                        {score.name}
                    </td>
                    <td>
                        {score.score}
                    </td>
                </tr>
            )
        })
        
        return highscores;
    }

    

    return (
        <>
            <h1 id='highscore'>High Scores</h1>
            <div id='highscore-div'>
                <table id='highscore-table'>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <th>Score</th>
                        </tr>
                        {sortScores()}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Highscores;