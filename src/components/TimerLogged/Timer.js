import React from "react";
import TimerActionButton from "./TimerActionButton";

class Timer extends React.Component {
    componentDidMount() {
        this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.forceUpdateInterval)
    }

    handleStartClick = () => {
        this.props.onStartClick(this.props.id);
    }

    handleStopClick = () => {
        this.props.onStopClick(this.props.id)
    }

    handleTrashClick = () => {
        this.props.onTrashClick(this.props.id);
    }

    render() {
        // eslint-disable-next-line no-undef
        const elapsedString = helpers.renderElapsedString(this.props.elapsed, this.props.runningSince)

        return (
            <div className={'card mb-3'}>
                <div className="card-body">
                    <div className="header">{this.props.title}</div>
                    <div className="meta">{this.props.project}</div>
                    <div className="text-center">
                        <h2>{elapsedString}</h2>
                    </div>
                    <div style={{'float': 'right'}}>
                        <button onClick={this.props.onEditClick} className={'btn btn-sm btn-info'}
                                style={{'marginRight': 5}}>Edit
                        </button>
                        <button onClick={this.handleTrashClick} className={'btn btn-sm btn-danger'}>Delete</button>
                    </div>
                </div>
                {/*<button className="btn btn-sm btn-block btn-success">Start</button>*/}
                <TimerActionButton
                    timeIsRunning={!!this.props.runningSince}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        )
    }
}

export default Timer;
