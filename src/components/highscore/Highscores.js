import { useEffect, useState } from "react";
import './style.css';

function Highscores() {
    const [scores, setScores] = useState(null);

    useEffect(() => {

        fetch("https://boiling-reaches-07903.herokuapp.com/highscores")
            .then(r => r.json())
            .then(data => setScores(data))

    }, []);

    if (!scores) {
        return <h2>Waking up my heroku server...</h2>
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