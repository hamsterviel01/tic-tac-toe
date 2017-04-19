/**
 * Created by nguyen_tu on 19/4/17.
 */
import React, { Component } from 'react';
import Square from './Square'

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dimension: 30,
            squares: [],
            xIsNext: true
        }
    }

    componentDidMount() {
        let squares = [];
        for (let i = 0; i<this.state.dimension; i++) {
            squares[i] = Array(this.state.dimension).fill(null);
        }
        this.setState({squares: squares});
    }

    handleClick(i, j) {
        const squares = this.state.squares.slice();
        squares[i][j] = this.state.xIsNext ? "X" : "O";
        this.setState({
            xIsNext: !this.state.xIsNext,
            squares: squares
        });
    }

    render() {
        return (
            <div className="board">
                <p>Current player: {this.state.currentPlayer}</p>
                {
                    this.state.squares.map((rowI, index1) =>
                        <div className="board-row">
                            {rowI.map((item, index2) => <Square key={index1 + "-" + index2} value={this.state.squares[index1][index2]} onClick={() => this.handleClick(index1, index2)}/>)}
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Board;