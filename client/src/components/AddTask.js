import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { Button, FormGroup, FormControl, ControlLabel, Form, Glyphicon, OverlayTrigger, Tooltip } from 'react-bootstrap';

class AddTask extends Component {
  constructor() {
    super();
    this.state = {
      task: {
        taskName: '',
        branchName: '',
        projectName: '',
        taskDescription: '',
        status: 'In Progress'
      },
      submit: "Submit",
      update: "Update"
    }
    this.initialState = this.state;
  }

  handleChange = (event) => {
    const target = event.target;

    const name = target.name;
    const value = target.value;

    this.setState({
      task: {
        ...this.state.task,
        [name]: value
      }
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submitTask(this.state.task);
  }

  componentWillReceiveProps = (props) => {
  
    if(!_.isEmpty(props.singleTask)) {
      this.setState({
        task: props.singleTask,
      });
    }
    else {
      this.setState({
        task: this.initialState.task
      })
    }
  }

  render() {

    return (
      <div className="Form clearfix">
        <Form>
          <OverlayTrigger placement="left" overlay={(<Tooltip id="tooltip">Clear the form.</Tooltip>)}>
            <Button className="editButton" onClick={() => this.props.editTask()}>
              <Glyphicon glyph="remove" />
            </Button>
          </OverlayTrigger>
          <FormGroup controlId="text" bsSize="large">
            <ControlLabel>Task name</ControlLabel>
            <FormControl
              type="text"
              name="taskName"
              onChange={this.handleChange}
              value={this.state.task.taskName}
              placeholder="Enter the task name"
            />
          </FormGroup>
          <FormGroup controlId="formControlsTextarea" bsSize="large">
            <ControlLabel>Description</ControlLabel>
            <FormControl
              name="taskDescription"
              onChange={this.handleChange}
              componentClass="textarea"
              value={this.state.task.taskDescription}
              placeholder="textarea" />
          </FormGroup>
          <FormGroup controlId="text" bsSize="large">
            <ControlLabel>Branch</ControlLabel>
            <FormControl
              name="branchName"
              type="text"
              onChange={this.handleChange}
              value={this.state.task.branchName}
              placeholder="Enter the branch name"
            />
          </FormGroup>
          <FormGroup controlId="text" bsSize="large">
            <ControlLabel>Project name</ControlLabel>
            <FormControl
              name="projectName"
              type="text"
              onChange={this.handleChange}
              value={this.state.task.projectName}
              placeholder="Enter the project name"
            />
          </FormGroup>
          <FormGroup controlId="formControlsSelect">
            <ControlLabel>Staus</ControlLabel>
            <FormControl
              value={this.state.task.status}
              name="status"
              onChange={this.handleChange}
              componentClass="select"
              placeholder="select">
              <option value="In Progress">In Progress</option>              
              <option value="Completed">Completed</option>
              <option value="Todo">Todo</option>
            </FormControl>
          </FormGroup>
          <Button
            block
            bsSize="large"
            type="submit"
            onClick={this.handleSubmit}
          >
            {
              this.state.task.taskId ? this.state.update : this.state.submit
            }
          </Button>
        </Form>
      </div>
    );
  }
}

AddTask.PropTypes = {
  submitTask: PropTypes.func,
  singleTask: PropTypes.object
}

export default AddTask;