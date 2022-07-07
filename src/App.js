import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import tasks from './sample/task.json';
//console.log(tasks);

//Components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

class App extends Component {

  state = {
    tasks: tasks
  }


  addTask = (title, description) => {
    const newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }
    //console.log(newTask);
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }
   
  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    //console.log(newTasks);
    this.setState({tasks: newTasks})
  }
  // deletetask = (id) => {
  //   const newTasks = this.state.tasks.filter(task => task.id !== id);
  //   console.log(newTasks);
  // }

  checkDone = id => {
    const newTasks = this.state.tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
      }
    );
    //console.log(newTasks);
    this.setState({tasks: newTasks})
  }
  // checkDone = id => {
  //   const newTasks = this.state.tasks.map(task => {
  //     if (task.id === id) {
  //       task.done = !task.done
  //     }
  //     return task;
  //   } );
  //   this.setState({tasks: newTasks})
  // }
 
  render() {
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/posts">Posts</Link>
        <Routes>
        {/* <Route path="/" element={<TaskForm/>} /> */}
        <Route path="/" element={
        <>
        <TaskForm addTask={this.addTask} /> 
        <Tasks 
                tasks={this.state.tasks} 
                deleteTask={this.deleteTask} 
                checkDone={this.checkDone}
              />
          </>
        } />
        
        {/* <Route path="/tasks" element={<Tasks/>} exact/> */}
        <Route path="/posts" element={<Posts/>} />

          
        </Routes>
      </Router>
      
       
      {/* <Posts/> */}
      </div>
     

  }

 }

export default App;
