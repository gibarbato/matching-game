import './style.css'
function CardGame(icon = "letra-g", alt = "Letra G") {
    return /*html*/`
        <article class='card-game'>
            <img src="images/${icon}.png" alt = '${alt}'>
        </article>
    `;
}

export default CardGame;