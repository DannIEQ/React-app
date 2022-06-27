import React, { Component } from "react";
import './Task.css';
import PropTypes from 'prop-types';


//Utilizando className para dar estilos:
// class Task extends Component {
//     render() {
//         const {task} = this.props;

//         return <p className="red">
//             {task.id} - 
//             {task.title} - 
//             {task.description} - 
//             {task.done}
//             <input type="checkbox"/>
//             <button>x</button>
//         </p>
            
//     }
// }


//Utilizando la propiedad style
// class Task extends Component {
//     render() {
//         const {task} = this.props;

//         return <p style={{background: 'yellow'}}>
//             {task.id} - 
//             {task.title} - 
//             {task.description} - 
//             {task.done}
//             <input type="checkbox"/>
//             <button>x</button>
//         </p>
            
//     }
// }

//Utilizando variables para llamar el estlo
class Task extends Component {
    StyleCompleted() {
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'

        }
    }

    render() {
        const {task} = this.props;
        //const redColor = {background: 'yellow'}

        return <p style={this.StyleCompleted()}>
            {task.id} - 
            {task.title} - 
            {task.description} - 
            {task.done}
            <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
            <button style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)} >
                x
            </button>
        </p>
            
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}



//Sin utilizar el archivo css, en linea
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'

}

export default Task;