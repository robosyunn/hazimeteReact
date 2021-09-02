import React from 'react'
import Board from './Board'
import { calculateWinner } from './utils/index';

const Game = () => {
    const [history, setHistory] = React.useState(
        [{ squares: Array(9).fill(null), }]
    );
    const [xIsNext, setXIsNext] = React.useState(true);

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        const currentSquares = current.squares.slice();
        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }
        currentSquares[i] = xIsNext ? 'X' : 'O';
        setHistory(history.concat([{
            squares: currentSquares,
        }]))
        setXIsNext(!xIsNext)
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={(i) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    );
}

export default Game