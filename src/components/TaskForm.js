import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }


    onSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTask(this.state.title, this.state.description);
    }

    onChange = e => {
        //console.log(e.target.name, e.target.value);
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    } 

    render() {
        //console.log(this.props);
       
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                    type='text' 
                    name='title'
                    placeholder='Write a task' 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    name='description'
                    placeholder='Write a description' 
                    onChange={this.onChange} 
                    value={this.state.description}/>
                <button type="submit">
                    Save the task
                </button>
                {/* <input type="submit"/> */}
            </form>
        )
    }
}

export default TaskForm;