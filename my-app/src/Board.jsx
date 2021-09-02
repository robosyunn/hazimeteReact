import React from 'react'
import Square from './Square'

// class Board extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             squares: Array(9).fill(null),
//         };
//     }

//     handleClick(i) {
//         const squares = this.state.squares.slice();
//         squares[i] = 'X';
//         this.setState({ squares: squares });
//     }

//     renderSquare(i) {
//         return (
//             <Square
//                 value={this.state.squares[i]}
//                 onClick={() => this.handleClick(i)}
//             />
//         );
//     }

//     render() {
//         const status = 'Next player: X';

//         return (
//             <div>
//                 <div className="status">{status}</div>
//                 <div className="board-row">
//                     {/* <Square value={0} />
//                     <Square value={1} />
//                     <Square value={2} /> */}
//                     {this.renderSquare(0)}
//                     {this.renderSquare(1)}
//                     {this.renderSquare(2)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(3)}
//                     {this.renderSquare(4)}
//                     {this.renderSquare(5)}
//                 </div>
//                 <div className="board-row">
//                     {this.renderSquare(6)}
//                     {this.renderSquare(7)}
//                     {this.renderSquare(8)}
//                 </div>
//             </div>
//         );
//     }
// }

const Board = (props) => {
    // const [squares, setSquares] = React.useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = React.useState(true);

    const renderSquare = (i) => {
        return (
            <Square
                value={props.squares[i]}
                onClick={() => props.onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board