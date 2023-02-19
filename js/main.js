import Game from "./Game.js";
import GameView from "./GameView.js";

let game = new Game();
let gameView = new GameView();

gameView.updateBoard(game);
document.querySelector(".restart").addEventListener("click",()=>{
    onRestart();
})
let tiles = document.querySelectorAll(".board_tile");

tiles.forEach((tile)=>{
    tile.addEventListener("click",()=>{
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i)
{
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestart()
{
    game = new Game();
    gameView.updateBoard(game)
}