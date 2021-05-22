import React from "react";

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || ''
    }

    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }

    handleProjectChange = (e) => {
        this.setState({project: e.target.value})
    }

    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
        })
    }

    onFormClose = () => {

    }

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className={'card mb-3'}>
                <div className="card-body">
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="title">Title:</label>
                            <input type="text" onChange={this.handleTitleChange} value={this.state.title} className={'form-control'} name={'title'} id={'title'}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="project">Project:</label>
                            <input type="text" onChange={this.handleProjectChange} value={this.state.project} className={'form-control'} name={'project'} id={'project'}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-sm btn-info" onClick={this.handleSubmit}>{submitText}</button>
                            <button className="btn btn-sm btn-danger" onClick={this.props.onFormClose}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TimerForm;
