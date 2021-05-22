import React from "react";

class TimerActionButton extends React.Component{
    render() {
        if (this.props.timeIsRunning) {
            return (
                <button className={'btn btn-sm btn-danger'} onClick={this.props.onStopClick}>Stop</button>
            )
        } else {
            return (
                <button className={'btn btn-sm btn-success'} onClick={this.props.onStartClick}>Start</button>
            )
        }
    }
}

export default TimerActionButton;
