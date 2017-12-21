import React, { Component } from 'react';

import * as services from '../services/standupAssistant';

import List from './List';
import AddTask from './AddTask';

class Index extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      singleTask: {}
    }
  }

  fetchTasks = () => {
    services.fetchTasks()
      .then((response) => {
        let tasks = response.data;

        this.setState({
          tasks: tasks
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  submitTask = (task) => {
    if (task.taskId) {
      services.updateTask(task)
        .then(data => {
          this.fetchTasks();
        }).catch(error => {
        })
    }
    else {
      services.createTask(task)
        .then((data) => {
          this.fetchTasks();          
        }).catch((error) => {

        });
    }
  }

  editTask = (task = {}) => {
    this.setState({
      singleTask: task
    })
  }

  componentWillMount() {
    this.fetchTasks();
  }

  render() {
    let props = {
      tasks: this.state.tasks,
      editTask: this.editTask
    }
    return (
      <div>
        <AddTask submitTask={this.submitTask} editTask={props.editTask} singleTask={this.state.singleTask} />
        <List tasks={props.tasks} editTask={props.editTask} />
      </div>
    )
  }
}

export default Index;