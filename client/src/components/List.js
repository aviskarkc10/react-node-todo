import React from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon, Tooltip, OverlayTrigger } from 'react-bootstrap';


const List = (props) => {

  return (
    <div className="List clearfix">
      {
        props.tasks && props.tasks.map(task => {
          return (
            <div key={task.taskId} className="singleTask clearfix">
              <OverlayTrigger placement="left" overlay={(<Tooltip id="tooltip">Edit this task.</Tooltip>)}>
                <Button className="editButton" onClick={() => props.editTask(task)}>
                  <Glyphicon glyph="pencil" />
                </Button>
              </OverlayTrigger>
              Task name: {task.taskName}<br />
              Status: {task.status}<br />
              Description: {task.taskDescription}<br />
              Project Name: {task.projectName}<br />
              Created at: {task.createdAt}<br />
              Updated at: {task.updatedAt}<br />
            </div>
          );
        })
      }
    </div>
  );
}

List.PropTypes = {
  tasks: PropTypes.object,
  editTask: PropTypes.func
}

export default List;