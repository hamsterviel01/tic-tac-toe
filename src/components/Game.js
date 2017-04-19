/**
 * Created by nguyen_tu on 19/4/17.
 */
import React, {Component} from 'react'
import Board from "./Board";

class Game extends Component {
    render() {
        return (
            <div className="game">
                <Board/>
            </div>
        )
    }
}

export default Game;
