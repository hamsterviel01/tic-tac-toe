/**
 * Created by nguyen_tu on 19/4/17.
 */
import React from 'react'
class Square extends React.Component {
    render() {
        return (
            <button className="square" onClick={() => this.props.onClick}>
                {this.props.value}
            </button>
        )
    }
}

export default Square;