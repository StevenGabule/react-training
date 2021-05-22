import React, {Component} from 'react';
import EditableTimerList from "./components/TimerLogged/EditableTimerList";
import ToggleableTimerForm from "./components/TimerLogged/ToggleableTimerForm";
/*
  eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
  no-undef, jsx-a11y/label-has-for
*/
class TimerDashboard extends Component {
    state = {
        timers: [
            {
                id: uuid.v4(),
                title: 'Practice Squat',
                project: 'Gym Chores',
                elapsed: 5456099,
                runningSince: Date.now(),
            },
            {
                id: uuid.v4(),
                title: 'Bake Squash',
                project: 'Kitchen Chores',
                elapsed: 1273998,
                runningSince: null,
            },
        ]
    }

    handleCreateFormSubmit = (timer) => {
        this.createTimer(timer);
    }

    handleEditFormSubmit = (attrs) => {
        this.updateTimer(attrs);
    }

    handleTrashClick = (timerId) => {
        this.deleteTimer(timerId)
    }

    handleStartClick = (timerId) => {
        this.startTimer(timerId)
    }

    handleStopClick = (timerId) => {
        this.stopTimer(timerId)
    }

    createTimer = (timer) => {
        const t = helpers.newTimer(timer);
        this.setState({
            timers: this.state.timers.concat(t)
        })
    }

    updateTimer = (attrs) => {
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === attrs.id) {
                    return Object.assign({}, timer, {
                        title: attrs.title,
                        project: attrs.project,
                    })
                } else {
                    return timer;
                }
            })
        })
    }

    deleteTimer = (timerId) => {
        this.setState({
            timers: this.state.timers.filter(t => t.id !== timerId)
        })
    }

    startTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    return Object.assign({}, timer, {
                        runningSince: now,
                    })
                } else {
                    return timer;
                }
            })
        })
    }

    stopTimer = (timerId) => {
        const now = Date.now();
        this.setState({
            timers: this.state.timers.map((timer) => {
                if (timer.id === timerId) {
                    const lastElapsed = now - timer.runningSince;
                    return Object.assign({}, timer, {
                        elapsed: timer.elapsed + lastElapsed,
                        runningSince: null,
                    })
                } else {
                    return timer;
                }
            })
        })
    }

    render() {
        return (
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-lg-3 offset-4'}>
                        <h3 className={'text-center'}>Timer Dashboard</h3>
                        <EditableTimerList
                            timers={this.state.timers}
                            onFormSubmit={this.handleEditFormSubmit}
                            onTrashClick={this.handleTrashClick}
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick}
                        />
                        <ToggleableTimerForm onFormSubmit={this.handleCreateFormSubmit} />
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerDashboard;
