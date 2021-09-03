import React from 'react'
import Board from './Board'
import { calculateWinner } from './utils/index';

const Game = () => {
    const [squares, setSquares] = React.useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = React.useState(true);

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }

    const handleClick = (i) => {
        const currentSquares = squares.slice();
        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }
        currentSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(currentSquares)
        setXIsNext(!xIsNext)
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={squares}
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