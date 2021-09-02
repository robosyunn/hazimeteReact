import React from 'react'

// class Square extends React.Component {
//     render() {
//         return (
//             // <button className="square" onClick={function () { alert('click'); }}>
//             <button
//                 className="square"
//                 // onClick={() => this.props.onClick()}
//                 onClick={this.props.onClick}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }

const Square = (props) => {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

//this.props.onClick => 関数そのもの
//this.props.onClick() => 関数の実行結果

export default Square