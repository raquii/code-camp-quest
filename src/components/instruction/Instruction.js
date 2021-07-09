import './style.css';

function Instruction(){
    return(
        <>
        <h1 id='instruction'>Instructions</h1>
            <div id='instruct-div'>
                <p>Your mission, whether you like it or not, is to complete 
                    your coding bootcamp tasks before the end of the day. </p>
                <p>Completing your homework is simple enough: somehow, the only key you 
                    need to hit is 'enter'.</p>
                <p>But completing it while also keeping up with the needs of your
                    adorable dog is another story. Specifically, it's this game's story.</p>
                    <div id='controls'>
                        <h3>Move: </h3><p>WASD or ↑←↓→</p>
                        <h3>Action: </h3><p>Space or Enter</p>
                    </div>
            </div>
        </>
    )
}

export default Instruction;