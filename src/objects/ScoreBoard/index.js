import ArrowDown from "../../components/ArrowDown";
import PlayerName from "../../components/PlayerName";
import PlayerScore from "../../components/PlayerScore";
import VsPlayer from '../../components/vsPlayer';
import './style.css';


function ScoreBoard() {
    return /*html*/ `
        <header class="score-board">
        ${(ArrowDown(1))}
        ${PlayerName('Player1')}
        ${PlayerScore(2)}
        ${VsPlayer()}
        ${PlayerScore(3)}
        ${PlayerName('Player2')}
        </header>
    `;
}

export default ScoreBoard;